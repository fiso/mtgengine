"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FissureVentBase = require("../setC13/FissureVent.js");

class FissureVent extends FissureVentBase {
  constructor(game) {
    super(game, "Fissure Vent", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = FissureVent;
