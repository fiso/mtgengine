"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IllusionaryServant extends Card {
  constructor(game) {
    super(game, "Illusionary Servant", "Magic 2010", "M10");
  }
}

module.exports = IllusionaryServant;
