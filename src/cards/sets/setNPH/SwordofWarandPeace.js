"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordofWarandPeace extends UnimplementedCard {
  constructor(game) {
    super(game, "Sword of War and Peace", "New Phyrexia", "NPH");
  }
}

module.exports = SwordofWarandPeace;
