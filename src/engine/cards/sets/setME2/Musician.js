"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Musician extends UnimplementedCard {
  constructor (game) {
    super(game, "Musician", "Masters Edition II", "ME2");
  }
}

module.exports = Musician;
