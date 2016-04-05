"use strict";
const Constants = require ("../../../Constants");
const PongifyBase = require("../setC14/Pongify");

class Pongify extends PongifyBase {
  constructor(game) {
    super(game, "Pongify", "Planar Chaos", "PLC");
  }
}

module.exports = Pongify;
