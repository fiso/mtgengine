"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapriciousSorcerer extends UnimplementedCard {
  constructor(game) {
    super(game, "Capricious Sorcerer", "Portal", "POR");
  }
}

module.exports = CapriciousSorcerer;
