"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreetSpasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Street Spasm", "Commander 2013 Edition", "C13");
  }
}

module.exports = StreetSpasm;
