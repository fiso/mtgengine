"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tromokratis extends UnimplementedCard {
  constructor (game) {
    super(game, "Tromokratis", "Born of the Gods", "BNG");
  }
}

module.exports = Tromokratis;
