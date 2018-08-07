"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorillaBerserkers extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorilla Berserkers", "Alliances", "ALL");
  }
}

module.exports = GorillaBerserkers;
