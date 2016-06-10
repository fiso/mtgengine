"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Waylay extends UnimplementedCard {
  constructor (game) {
    super(game, "Waylay", "Urza's Saga", "USG");
  }
}

module.exports = Waylay;
