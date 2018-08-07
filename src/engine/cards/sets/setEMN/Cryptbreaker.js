"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cryptbreaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptbreaker", "Eldritch Moon", "EMN");
  }
}

module.exports = Cryptbreaker;
