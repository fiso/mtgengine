"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecroticPlague extends Card {
  constructor(game) {
    super(game, "Necrotic Plague", "Magic 2011", "M11");
  }
}

module.exports = NecroticPlague;
