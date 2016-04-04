"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamahlsSummons extends UnimplementedCard {
  constructor(game) {
    super(game, "Kamahl's Summons", "Onslaught", "ONS");
  }
}

module.exports = KamahlsSummons;
