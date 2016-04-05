"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unhinge extends UnimplementedCard {
  constructor(game) {
    super(game, "Unhinge", "Torment", "TOR");
  }
}

module.exports = Unhinge;
