"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImmolationBase = require("../set4ED/Immolation.js");

class Immolation extends ImmolationBase {
  constructor(game) {
    super(game, "Immolation", "Masters Edition III", "ME3");
  }
}

module.exports = Immolation;
