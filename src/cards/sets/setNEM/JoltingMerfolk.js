"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoltingMerfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Jolting Merfolk", "Nemesis", "NEM");
  }
}

module.exports = JoltingMerfolk;
