"use strict";
const Constants = require ("../../../Constants");
const BoonSatyrBase = require("../setC18/BoonSatyr");

class BoonSatyr extends BoonSatyrBase {
  constructor (game) {
    super(game, "Boon Satyr", "Theros", "THS");
  }
}

module.exports = BoonSatyr;
