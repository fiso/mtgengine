"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhipofErebosBase = require("../setCPK/WhipofErebos.js");

class WhipofErebos extends WhipofErebosBase {
  constructor(game) {
    super(game, "Whip of Erebos", "Theros", "THS");
  }
}

module.exports = WhipofErebos;
