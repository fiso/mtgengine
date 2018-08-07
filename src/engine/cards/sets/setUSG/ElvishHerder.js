"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishHerder extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Herder", "Urza's Saga", "USG");
  }
}

module.exports = ElvishHerder;
