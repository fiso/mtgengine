"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfuseBase = require("../setICE/Infuse.js");

class Infuse extends InfuseBase {
  constructor(game) {
    super(game, "Infuse", "Masters Edition III", "ME3");
  }
}

module.exports = Infuse;
