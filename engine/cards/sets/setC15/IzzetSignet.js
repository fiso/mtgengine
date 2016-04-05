"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetSignet extends UnimplementedCard {
  constructor(game) {
    super(game, "Izzet Signet", "Commander 2015", "C15");
  }
}

module.exports = IzzetSignet;
