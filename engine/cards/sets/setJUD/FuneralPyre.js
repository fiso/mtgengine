"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FuneralPyre extends Card {
  constructor(game) {
    super(game, "Funeral Pyre", "Judgment", "JUD");
  }
}

module.exports = FuneralPyre;
