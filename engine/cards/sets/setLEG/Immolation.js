"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImmolationBase = require("../set4ED/Immolation.js");

class Immolation extends ImmolationBase {
  constructor(game) {
    super(game, "Immolation", "Legends", "LEG");
  }
}

module.exports = Immolation;
