"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Charisma extends UnimplementedCard {
  constructor(game) {
    super(game, "Charisma", "Mercadian Masques", "MMQ");
  }
}

module.exports = Charisma;
