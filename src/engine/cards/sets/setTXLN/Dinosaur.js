"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dinosaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Dinosaur", "Ixalan Tokens", "TXLN");
  }
}

module.exports = Dinosaur;
