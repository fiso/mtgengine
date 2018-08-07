"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromgaldSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Stromgald Spy", "Alliances", "ALL");
  }
}

module.exports = StromgaldSpy;
