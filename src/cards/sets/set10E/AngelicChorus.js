"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicChorus extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Chorus", "Tenth Edition", "10E");
  }
}

module.exports = AngelicChorus;
