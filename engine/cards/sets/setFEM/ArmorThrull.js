"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmorThrull extends UnimplementedCard {
  constructor(game) {
    super(game, "Armor Thrull", "Fallen Empires", "FEM");
  }
}

module.exports = ArmorThrull;
