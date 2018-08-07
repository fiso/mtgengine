"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vebulid extends UnimplementedCard {
  constructor (game) {
    super(game, "Vebulid", "Urza's Saga", "USG");
  }
}

module.exports = Vebulid;
