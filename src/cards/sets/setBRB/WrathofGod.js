"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrathofGod extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrath of God", "Battle Royale Box Set", "BRB");
  }
}

module.exports = WrathofGod;
