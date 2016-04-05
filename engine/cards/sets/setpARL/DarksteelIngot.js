"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelIngot extends UnimplementedCard {
  constructor(game) {
    super(game, "Darksteel Ingot", "Arena League", "pARL");
  }
}

module.exports = DarksteelIngot;
