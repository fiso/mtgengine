"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PongifyBase = require("../setC14/Pongify.js");

class Pongify extends PongifyBase {
  constructor(game) {
    super(game, "Pongify", "Planar Chaos", "PLC");
  }
}

module.exports = Pongify;
