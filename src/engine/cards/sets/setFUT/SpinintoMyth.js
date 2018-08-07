"use strict";
const Constants = require ("../../../Constants");
const SpinintoMythBase = require("../setARC/SpinintoMyth");

class SpinintoMyth extends SpinintoMythBase {
  constructor (game) {
    super(game, "Spin into Myth", "Future Sight", "FUT");
  }
}

module.exports = SpinintoMyth;
