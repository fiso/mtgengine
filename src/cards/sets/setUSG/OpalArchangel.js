"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalArchangel extends UnimplementedCard {
  constructor(game) {
    super(game, "Opal Archangel", "Urza's Saga", "USG");
  }
}

module.exports = OpalArchangel;
