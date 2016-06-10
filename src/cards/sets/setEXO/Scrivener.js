"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scrivener extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrivener", "Exodus", "EXO");
  }
}

module.exports = Scrivener;
