"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelIngot extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Ingot", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DarksteelIngot;
