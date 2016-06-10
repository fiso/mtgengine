"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimAbomination extends UnimplementedCard {
  constructor (game) {
    super(game, "Nim Abomination", "Darksteel", "DST");
  }
}

module.exports = NimAbomination;
