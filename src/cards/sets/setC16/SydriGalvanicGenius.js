"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SydriGalvanicGenius extends UnimplementedCard {
  constructor (game) {
    super(game, "Sydri, Galvanic Genius", "Commander 2016", "C16");
  }
}

module.exports = SydriGalvanicGenius;
