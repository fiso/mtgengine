"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmorThrull extends UnimplementedCard {
  constructor (game) {
    super(game, "Armor Thrull", "Masters Edition II", "ME2");
  }
}

module.exports = ArmorThrull;
