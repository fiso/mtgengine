"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmorThrull extends Card {
  constructor(game) {
    super(game, "Armor Thrull", "Fallen Empires", "FEM");
  }
}

module.exports = ArmorThrull;
