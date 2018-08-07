"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterTrinketeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Trinketeer", "Kaladesh", "KLD");
  }
}

module.exports = MasterTrinketeer;
