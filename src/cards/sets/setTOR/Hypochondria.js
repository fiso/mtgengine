"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hypochondria extends UnimplementedCard {
  constructor (game) {
    super(game, "Hypochondria", "Torment", "TOR");
  }
}

module.exports = Hypochondria;
