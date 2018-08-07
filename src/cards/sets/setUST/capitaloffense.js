"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class capitaloffense extends UnimplementedCard {
  constructor (game) {
    super(game, "capital offense", "Unstable", "UST");
  }
}

module.exports = capitaloffense;
