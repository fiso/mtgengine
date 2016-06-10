"use strict";
const Constants = require ("../../../Constants");
const InfuseBase = require("../setICE/Infuse");

class Infuse extends InfuseBase {
  constructor (game) {
    super(game, "Infuse", "Masters Edition III", "ME3");
  }
}

module.exports = Infuse;
