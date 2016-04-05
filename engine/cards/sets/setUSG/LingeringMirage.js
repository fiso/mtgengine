"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LingeringMirage extends UnimplementedCard {
  constructor(game) {
    super(game, "Lingering Mirage", "Urza's Saga", "USG");
  }
}

module.exports = LingeringMirage;
