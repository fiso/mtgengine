"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionaryArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusionary Armor", "Magic 2014", "M14");
  }
}

module.exports = IllusionaryArmor;
