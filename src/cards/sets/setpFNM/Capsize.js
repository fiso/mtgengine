"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Capsize extends UnimplementedCard {
  constructor (game) {
    super(game, "Capsize", "Friday Night Magic", "pFNM");
  }
}

module.exports = Capsize;
