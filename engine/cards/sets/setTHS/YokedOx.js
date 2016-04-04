"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YokedOxBase = require("../setORI/YokedOx.js");

class YokedOx extends YokedOxBase {
  constructor(game) {
    super(game, "Yoked Ox", "Theros", "THS");
  }
}

module.exports = YokedOx;
