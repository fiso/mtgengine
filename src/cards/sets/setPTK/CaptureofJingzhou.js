"use strict";
const Constants = require ("../../../Constants");
const CaptureofJingzhouBase = require("../setME3/CaptureofJingzhou");

class CaptureofJingzhou extends CaptureofJingzhouBase {
  constructor (game) {
    super(game, "Capture of Jingzhou", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CaptureofJingzhou;
