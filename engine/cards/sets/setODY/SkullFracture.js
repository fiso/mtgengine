"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkullFracture extends Card {
  constructor(game) {
    super(game, "Skull Fracture", "Odyssey", "ODY");
  }
}

module.exports = SkullFracture;
