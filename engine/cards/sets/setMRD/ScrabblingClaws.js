"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScrabblingClaws extends Card {
  constructor(game) {
    super(game, "Scrabbling Claws", "Mirrodin", "MRD");
  }
}

module.exports = ScrabblingClaws;
