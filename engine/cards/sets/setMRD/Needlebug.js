"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Needlebug extends Card {
  constructor(game) {
    super(game, "Needlebug", "Mirrodin", "MRD");
  }
}

module.exports = Needlebug;
