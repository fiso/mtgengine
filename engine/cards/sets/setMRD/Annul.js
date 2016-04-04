"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Annul extends Card {
  constructor(game) {
    super(game, "Annul", "Mirrodin", "MRD");
  }
}

module.exports = Annul;
