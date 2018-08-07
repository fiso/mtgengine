"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CuriousObsession extends UnimplementedCard {
  constructor (game) {
    super(game, "Curious Obsession", "Rivals of Ixalan", "RIX");
  }
}

module.exports = CuriousObsession;
