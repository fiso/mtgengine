"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelbesArmor extends UnimplementedCard {
  constructor(game) {
    super(game, "Belbe's Armor", "Nemesis", "NMS");
  }
}

module.exports = BelbesArmor;
