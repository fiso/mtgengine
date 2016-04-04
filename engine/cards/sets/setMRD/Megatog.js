"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Megatog extends Card {
  constructor(game) {
    super(game, "Megatog", "Mirrodin", "MRD");
  }
}

module.exports = Megatog;
