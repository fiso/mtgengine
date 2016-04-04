"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaptureofJingzhouBase = require("../setME3/CaptureofJingzhou.js");

class CaptureofJingzhou extends CaptureofJingzhouBase {
  constructor(game) {
    super(game, "Capture of Jingzhou", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CaptureofJingzhou;
