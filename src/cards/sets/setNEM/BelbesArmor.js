"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelbesArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Belbe's Armor", "Nemesis", "NEM");
  }
}

module.exports = BelbesArmor;
