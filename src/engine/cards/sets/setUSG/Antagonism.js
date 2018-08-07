"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Antagonism extends UnimplementedCard {
  constructor (game) {
    super(game, "Antagonism", "Urza's Saga", "USG");
  }
}

module.exports = Antagonism;
