"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Scrap", "Urza's Saga", "USG");
  }
}

module.exports = Scrap;
