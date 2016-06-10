"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Taunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Taunt", "Portal", "POR");
  }
}

module.exports = Taunt;
