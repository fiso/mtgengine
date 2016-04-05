"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Opal Titan", "Urza's Saga", "USG");
  }
}

module.exports = OpalTitan;
