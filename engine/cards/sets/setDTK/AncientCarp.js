"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientCarp extends Card {
  constructor(game) {
    super(game, "Ancient Carp", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AncientCarp;
