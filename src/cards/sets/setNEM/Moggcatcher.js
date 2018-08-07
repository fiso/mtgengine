"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Moggcatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Moggcatcher", "Nemesis", "NEM");
  }
}

module.exports = Moggcatcher;
