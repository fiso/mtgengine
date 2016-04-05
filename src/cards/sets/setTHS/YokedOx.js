"use strict";
const Constants = require ("../../../Constants");
const YokedOxBase = require("../setORI/YokedOx");

class YokedOx extends YokedOxBase {
  constructor(game) {
    super(game, "Yoked Ox", "Theros", "THS");
  }
}

module.exports = YokedOx;
