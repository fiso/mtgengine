"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NegateBase = require("../setDTK/Negate.js");

class Negate extends NegateBase {
  constructor(game) {
    super(game, "Negate", "Morningtide", "MOR");
  }
}

module.exports = Negate;
