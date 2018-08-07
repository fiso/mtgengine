"use strict";
const Constants = require ("../../../Constants");
const CaptureofJingzhouBase = require("../setJ17/CaptureofJingzhou");

class CaptureofJingzhou extends CaptureofJingzhouBase {
  constructor (game) {
    super(game, "Capture of Jingzhou", "Masters Edition III", "ME3");
  }
}

module.exports = CaptureofJingzhou;
