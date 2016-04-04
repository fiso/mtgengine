"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CycloneBase = require("../setARN/Cyclone.js");

class Cyclone extends CycloneBase {
  constructor(game) {
    super(game, "Cyclone", "Masters Edition IV", "ME4");
  }
}

module.exports = Cyclone;
