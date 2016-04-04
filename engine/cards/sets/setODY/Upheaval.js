"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UpheavalBase = require("../setV14/Upheaval.js");

class Upheaval extends UpheavalBase {
  constructor(game) {
    super(game, "Upheaval", "Odyssey", "ODY");
  }
}

module.exports = Upheaval;
