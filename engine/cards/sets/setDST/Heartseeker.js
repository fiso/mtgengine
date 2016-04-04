"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Heartseeker extends Card {
  constructor(game) {
    super(game, "Heartseeker", "Darksteel", "DST");
  }
}

module.exports = Heartseeker;
