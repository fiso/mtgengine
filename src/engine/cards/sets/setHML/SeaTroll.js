"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaTroll extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Troll", "Homelands", "HML");
  }
}

module.exports = SeaTroll;
