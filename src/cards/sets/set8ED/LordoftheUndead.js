"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordoftheUndead extends UnimplementedCard {
  constructor (game) {
    super(game, "Lord of the Undead", "Eighth Edition", "8ED");
  }
}

module.exports = LordoftheUndead;
