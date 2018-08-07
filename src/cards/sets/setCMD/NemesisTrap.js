"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NemesisTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Nemesis Trap", "Commander 2011", "CMD");
  }
}

module.exports = NemesisTrap;
