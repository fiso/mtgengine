"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlanchwoodArmor extends UnimplementedCard {
  constructor(game) {
    super(game, "Blanchwood Armor", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = BlanchwoodArmor;
