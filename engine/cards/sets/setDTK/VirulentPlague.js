"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VirulentPlague extends Card {
  constructor(game) {
    super(game, "Virulent Plague", "Dragons of Tarkir", "DTK");
  }
}

module.exports = VirulentPlague;
