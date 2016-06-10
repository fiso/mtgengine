"use strict";
const Constants = require ("../../../Constants");
const ThornThallidBase = require("../setFEM/ThornThallid");

class ThornThallid extends ThornThallidBase {
  constructor (game) {
    super(game, "Thorn Thallid", "Masters Edition", "MED");
  }
}

module.exports = ThornThallid;
