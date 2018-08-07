"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalAcrolith extends UnimplementedCard {
  constructor (game) {
    super(game, "Opal Acrolith", "Urza's Saga", "USG");
  }
}

module.exports = OpalAcrolith;
