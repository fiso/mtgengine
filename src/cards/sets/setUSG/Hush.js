"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hush extends UnimplementedCard {
  constructor (game) {
    super(game, "Hush", "Urza's Saga", "USG");
  }
}

module.exports = Hush;
