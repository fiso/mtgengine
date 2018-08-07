"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordoftheAges extends UnimplementedCard {
  constructor (game) {
    super(game, "Sword of the Ages", "Masters Edition III", "ME3");
  }
}

module.exports = SwordoftheAges;
