"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SternProctor extends UnimplementedCard {
  constructor (game) {
    super(game, "Stern Proctor", "Urza's Saga", "USG");
  }
}

module.exports = SternProctor;
