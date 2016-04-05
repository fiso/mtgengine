"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonasterySiege extends UnimplementedCard {
  constructor(game) {
    super(game, "Monastery Siege", "Fate Reforged", "FRF");
  }
}

module.exports = MonasterySiege;
