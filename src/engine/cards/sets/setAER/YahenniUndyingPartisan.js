"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YahenniUndyingPartisan extends UnimplementedCard {
  constructor (game) {
    super(game, "Yahenni, Undying Partisan", "Aether Revolt", "AER");
  }
}

module.exports = YahenniUndyingPartisan;
