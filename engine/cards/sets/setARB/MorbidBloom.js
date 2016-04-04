"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorbidBloom extends Card {
  constructor(game) {
    super(game, "Morbid Bloom", "Alara Reborn", "ARB");
  }
}

module.exports = MorbidBloom;
