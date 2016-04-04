"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GalvanicKey extends Card {
  constructor(game) {
    super(game, "Galvanic Key", "Mirrodin", "MRD");
  }
}

module.exports = GalvanicKey;
