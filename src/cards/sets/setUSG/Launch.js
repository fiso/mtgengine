"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Launch extends UnimplementedCard {
  constructor(game) {
    super(game, "Launch", "Urza's Saga", "USG");
  }
}

module.exports = Launch;
