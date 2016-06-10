"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gloomhunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Gloomhunter", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Gloomhunter;
