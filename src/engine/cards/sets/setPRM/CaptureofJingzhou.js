"use strict";
const Constants = require ("../../../Constants");
const CaptureofJingzhouBase = require("../setJ17/CaptureofJingzhou");

class CaptureofJingzhou extends CaptureofJingzhouBase {
  constructor (game) {
    super(game, "Capture of Jingzhou", "Magic Online Promos", "PRM");
  }
}

module.exports = CaptureofJingzhou;
