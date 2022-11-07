import React, { useEffect, useState } from 'react';
import numeric from 'numeric';
import uniqueRandom from 'unique-random';

const RoomScene = ({ roomScene, finishes, installation, shape, angle }) => {
  const [hover, setHover] = useState(false);
  const [roomSceneDimension, setRoomDimension] = useState({});
  const [surface, setSurface] = useState({});

  const onImageLoad = (img) => {
    setRoomDimension({
      height: img.target.offsetHeight,
      width: img.target.offsetWidth,
      // height: 1812,
      // width: 2800,
    });
  };

  console.log('surface', surface);

  useEffect(() => {
    if (roomSceneDimension.width) {
      setSurface(
        getPerspective(roomSceneDimension, finishes.surface[0], angle),
      );
    }
  }, [roomSceneDimension]);

  const getTransform = (from, to) => {
    let A;
    let H;
    let b;
    let h;
    let i;
    let k;
    let k_i;
    let l;
    let lhs;
    let m;
    let ref;
    let rhs;

    A = [];
    for (i = k = 0; k < 4; i = ++k) {
      A.push([
        from[i].x,
        from[i].y,
        1,
        0,
        0,
        0,
        -from[i].x * to[i].x,
        -from[i].y * to[i].x,
      ]);
      A.push([
        0,
        0,
        0,
        from[i].x,
        from[i].y,
        1,
        -from[i].x * to[i].y,
        -from[i].y * to[i].y,
      ]);
    }
    b = [];
    for (i = l = 0; l < 4; i = ++l) {
      b.push(to[i].x);
      b.push(to[i].y);
    }
    h = numeric.solve(A, b);
    H = [
      [h[0], h[1], 0, h[2]],
      [h[3], h[4], 0, h[5]],
      [0, 0, 1, 0],
      [h[6], h[7], 0, 1],
    ];
    for (i = m = 0; m < 4; i = ++m) {
      lhs = numeric.dot(H, [from[i].x, from[i].y, 0, 1]);
      k_i = lhs[3];
      rhs = numeric.dot(k_i, [to[i].x, to[i].y, 0, 1]);
      ////console.assert(numeric.norm2(numeric.sub(lhs, rhs)) < 1e-9, "Not equal:", lhs, rhs);
    }
    return H;
  };

  const getPerspective = (roomSceneImgView, finishesObj, rotationAngle) => {
    if (!roomSceneImgView.width) {
      return;
    }

    let surface = {};

    let perTo = finishesObj.perspective;
    let inchToPixelFactor = finishesObj.inchToPixelFactor;

    // console.log(finishesObj.perspective)
    let x1 = perTo[0][0];
    let y1 = perTo[0][1];
    let x2 = x1;
    let y2 =
      y1 +
      Math.sqrt(Math.pow(perTo[1][0] - x1, 2) + Math.pow(perTo[1][1] - y1, 2));
    let x3 =
      x1 +
      Math.sqrt(Math.pow(perTo[2][0] - x1, 2) + Math.pow(perTo[2][1] - y1, 2));
    let y3 = y1;
    let x4 = x3;
    let y4 = y2;
    let perFrom = [
      [x1, y1], //x1,y1
      [x2, y2], //x2,y2
      [x3, y3], //x3,y3
      [x4, y4], //x4,y4
    ];

    let originalFrom = [];
    for (let i = 0; i < 4; i++) {
      originalFrom.push([
        perFrom[i][0] * roomSceneImgView.width,
        perFrom[i][1] * roomSceneImgView.height,
      ]);
    }
    let originalTo = [];
    for (let i = 0; i < 4; i++) {
      originalTo.push([
        perTo[i][0] * roomSceneImgView.width,
        perTo[i][1] * roomSceneImgView.height,
      ]);
    }
    //if(innerBlock!=1){
    var getLeft = (surface.left = originalFrom[0][0] - 10);
    surface.left = getLeft + 'px';
    if (rotationAngle == 45) {
      var getTop = originalFrom[0][1] - 100;
    } else {
      var getTop = originalFrom[0][1] - 20;
    }
    surface.top = getTop + 'px';
    //}

    let width = originalFrom[2][0] - originalFrom[0][0]; // From[3].x+'px';
    let height = originalFrom[1][1] - originalFrom[0][1]; //From[3].y+'px';

    /* start increase width&height to get quality*/
    originalFrom[3][1] = Math.round(originalFrom[3][1] + height);
    originalFrom[2][0] = Math.round(originalFrom[2][0] + width);
    originalFrom[3][0] = Math.round(originalFrom[3][0] + width);
    originalFrom[1][1] = Math.round(originalFrom[1][1] + height);
    /* end increase width&height to get quality*/

    let widthRound = Math.round(originalFrom[2][0] - originalFrom[0][0]);
    let heightRound = Math.round(originalFrom[1][1] - originalFrom[0][0]);

    surface.width = widthRound + 'px';
    surface.height = heightRound + 'px';

    //console.log( Math.round(surface.width));
    //console.log( Math.round(surface.height));

    let From = [];
    for (let k = 0; k < originalFrom.length; k++) {
      let p = originalFrom[k];
      From.push({
        x: p[0] - originalFrom[0][0],
        y: p[1] - originalFrom[0][1],
      });
    }

    let To = [];
    for (let k = 0; k < originalTo.length; k++) {
      let p = originalTo[k];
      To.push({
        x: p[0] - originalFrom[0][0],
        y: p[1] - originalFrom[0][1],
      });
    }
    let tran = getTransform(From, To);
    let matrix3d =
      tran[0][0] +
      ',' +
      tran[1][0] +
      ',' +
      tran[2][0] +
      ',' +
      tran[3][0] +
      ',' +
      tran[0][1] +
      ',' +
      tran[1][1] +
      ',' +
      tran[2][1] +
      ',' +
      tran[3][1] +
      ',' +
      tran[0][2] +
      ',' +
      tran[1][2] +
      ',' +
      tran[2][2] +
      ',' +
      tran[3][2] +
      ',' +
      tran[0][3] +
      ',' +
      tran[1][3] +
      ',' +
      tran[2][3] +
      ',' +
      tran[3][3];
    surface.transform = 'matrix3d(' + matrix3d + ')';
    surface.WebkitTransform = 'matrix3d(' + matrix3d + ')';

    return { perspective: surface, heightRound, widthRound, inchToPixelFactor };
  };

  const getInstallation = () => {
    var htmlStringHtml = '';
    const getSize = shape.split('X');

    var BL = 0;
    var BT = 0;
    var BA = angle;
    var BT = 0;
    var W = Math.ceil(getSize[0] * surface.inchToPixelFactor);
    var H = getSize[1] * surface.inchToPixelFactor;

    let CanvasH = surface.heightRound;
    let CanvasW = surface.widthRound + H;

    var increment = 1;
    var i = 0;

    var bg = finishes.src;

    switch (installation) {
      case 'monolithic':
        // console.log(quality);
        if (angle == 270) {
          BA = 180;
        }
        while (BT <= CanvasH + H) {
          var BAFirst = BA;
          while (BL <= CanvasW) {
            htmlStringHtml += `<div class="inner-html rotate-${BA}"  id ="${i}" style='position:absolute;display:inline-block;width:${W}px;height:${H}px;top:${BT}px;left:${BL}px;background:url(${bg});'></div>`;
            i++;
            BL = BL + W;
            BA == 180 ? (BA = 0) : (BA = 180);
            //console.log(i+") - BL: "+BL+", BT: "+BT+"=== CanvasH: "+CanvasH);
          }

          BT = BT + H;
          BL = 0;
          BAFirst == 180 ? (BA = 0) : (BA = 180);
        }
        break;
      case 'herringbone':
        // This add extra plus 1 to herringbone if inchtopixel factor is in odd number.
        if (angle == '45') {
          BA = 135; // it will rotate canvas 135 degree if rotation is 45 degree
          CanvasW = Math.round(surface.widthRound + 1200);
        }

        let addExtra;
        shape == '9X36' && surface.inchToPixelFactor % 2 == 1
          ? (addExtra = 1)
          : (addExtra = 0);
        //Scripting for vertical Tiles
        while (BL <= CanvasW) {
          var BAFirst = BA;

          while (BT < CanvasH) {
            htmlStringHtml += `<div class="inner-html rotate-${BA}" id=${i} style='position:absolute;display:inline-block;left:${BL}px;top:${BT}px;width:${
              W + W
            }px;height:${H + H}px;background:url(${bg});'></div>`;
            BA == 0 ? (BA = 180) : (BA = 0);
            i++;
            BT = BT + 2 * H;
          }
          BT = -(W * increment);
          increment = increment + 1;
          BL = BL + W;
          BAFirst == 180 ? (BA = 0) : (BA = 180);
          if (BT + H == 0) {
            // to start cell from b1
            BT = H;
          }
        }

        console.log('g', Math.round(CanvasW / W));
        //

        var xfactor = 0;

        H / W == 2 ? (xfactor = W / 2) : (xfactor = W * 2.5); ////(((H/W) - 1)*W);
        if (shape == '4X36') {
          H / W == 2 ? (xfactor = W / 2) : (xfactor = W * 3);
        }

        BT = -xfactor; //-36
        BL = H + xfactor; //132
        BA = 90;
        if (angle == 270 || angle == 90) {
          BA = 270;
        }
        increment = 1;
        //  H  = (getSizeDimension.height+1);
        while (BT < CanvasH) {
          var BAFirst = BA;
          while (BL <= CanvasW) {
            // var bg =  this.checkForMoirePattern(isMoire,BT,getHalfheight,BA,quality,grid_col,grid_row,moireTileQuality,applyUntill);
            htmlStringHtml += `<div id=${i} class="inner-html  rotate-${BA}" id=${i} style='position:absolute;display:inline-block;left:${BL}px;top:${BT}px;width:${W}px;height:${
              H + addExtra
            }px;background:url(${bg});'></div>`;

            BA == 90 ? (BA = 270) : (BA = 90);
            i++;
            BL = BL + 2 * H;
          }
          BL = H + xfactor - W * increment;
          increment = increment + 1;
          BT = BT + W;
          BAFirst == 90 ? (BA = 270) : (BA = 90);
          if (BL + H == 0) {
            // to start cell from b1
            BL = H;
          }
        }
        break;

      case 'qt':
        i = 1;

        //Here is the code for rotation and flip in quarteturn
        let qtTurnAngle = [90, 270];
        let qtTurnStarightAngle = [0, 180];
        let randqtTurnAngle = uniqueRandom(0, qtTurnAngle.length - 1);
        let randTurnStarightAngle = uniqueRandom(
          0,
          qtTurnStarightAngle.length - 1,
        );
        //end here
        // console.log(randqtTurnAngle());
        while (BT <= CanvasH + H) {
          var BAFirst = BA;
          while (BL <= CanvasW) {
            htmlStringHtml += `<div class="inner-html rotate-${BA}"  id="${i}" style='position:absolute;top:${BT}px;left:${BL}px;display:inline-block; width:${
              W + 40
            }px;height:${H + 40}px;background:url(${bg});'></div>`;
            BL = BL + W;
            i++;
            BA == 0 || BA == 180
              ? (BA = qtTurnAngle[randqtTurnAngle()])
              : (BA = qtTurnStarightAngle[randTurnStarightAngle()]);
          }
          BT = BT + H;
          BL = 0;
          BAFirst == 90 ? (BA = 0) : (BA = 90);
        }
        break;

      case 'brick':
        (shape == '9X36' || shape == '7X48') &&
        surface.inchToPixelFactor % 2 == 1
          ? (H = H + 1)
          : (H = H);
        if (shape != '24X24') {
          BA = 90;
        }
        if (angle == 270) {
          BA = 270;
        }
        var needMargin = false;
        while (BT <= CanvasH + H) {
          var BAFirst = BA;
          while (BL <= CanvasW + W) {
            htmlStringHtml += `<div class="inner-html rotate-${BA}" id=${i} style='position:absolute;display:inline-block;left:${BL}px;top:${BT}px;width:${
              W + 100
            }px;height:${H + 100}px;background:url(${bg});'></div>`;
            i++;
            //var bg = this.getVariationsBG(quality,grid_col,grid_row);
            //htmlStringHtml +=  `<div class="inner-html" id=${i} style='position:absolute;display:inline-block;left:${(BL+W)}px;top:${(BT - (H/2))}px;width:${W}px;height:${H}px;background:url(${bg});'></div>`;
            BL = BL + H;
            //(BA == 0) ? BA = 180 : BA = 0;
            if (shape == '24X24') {
              BA == 0 ? (BA = 180) : (BA = 0);
            } else {
              BA == 90 ? (BA = 270) : (BA = 90);
            }
          }
          //BT=0;
          BT = BT + W;
          if (needMargin == false) {
            BL = -(H / 2);
            needMargin = true;
          } else {
            BL = 0;
            needMargin = false;
          }
        }
    }

    return (
      <div
        className="inner-html-parImg"
        style={{
          zIndex: 999999,
          position: 'relative',
          width: CanvasW + W,
          height: CanvasH + H,
        }}
        dangerouslySetInnerHTML={{ __html: htmlStringHtml }}
      ></div>
    );
  };

  return (
    <div onMouseOver={() => setHover(true)} className="room-scene-container">
      <div>
        <img
          src={roomScene}
          onLoad={onImageLoad}
          alt="RoomScene"
          style={{ maxWidth: '1920px' }}
        />
      </div>
      <div
        className="room-scene-finishes-container"
        style={{ width: '1920px' }}
      >
        <div className="finishes-content-box">
          <div className="finishes-surface" style={surface.perspective}>
            <div className="inner-surface-block">{getInstallation()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomScene;
