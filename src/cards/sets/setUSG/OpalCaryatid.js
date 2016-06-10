"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalCaryatid extends UnimplementedCard {
  constructor (game) {
    super(game, "Opal Caryatid", "Urza's Saga", "USG");
  }
}

module.exports = OpalCaryatid;
