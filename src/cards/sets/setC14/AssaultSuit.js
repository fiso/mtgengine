"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssaultSuit extends UnimplementedCard {
  constructor(game) {
    super(game, "Assault Suit", "Commander 2014", "C14");
  }
}

module.exports = AssaultSuit;
