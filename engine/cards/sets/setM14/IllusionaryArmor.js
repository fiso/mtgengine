"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IllusionaryArmor extends Card {
  constructor(game) {
    super(game, "Illusionary Armor", "Magic 2014 Core Set", "M14");
  }
}

module.exports = IllusionaryArmor;
