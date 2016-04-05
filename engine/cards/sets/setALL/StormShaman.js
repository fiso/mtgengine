"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Storm Shaman", "Alliances", "ALL");
  }
}

module.exports = StormShaman;
