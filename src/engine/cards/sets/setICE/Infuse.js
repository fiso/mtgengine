"use strict";
const Constants = require ("../../../Constants");
const InfuseBase = require("../setME3/Infuse");

class Infuse extends InfuseBase {
  constructor (game) {
    super(game, "Infuse", "Ice Age", "ICE");
  }
}

module.exports = Infuse;
