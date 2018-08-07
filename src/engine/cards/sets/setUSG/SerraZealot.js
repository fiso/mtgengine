"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraZealot extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Zealot", "Urza's Saga", "USG");
  }
}

module.exports = SerraZealot;
