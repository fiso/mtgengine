"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SereneMaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Serene Master", "Commander 2013 Edition", "C13");
  }
}

module.exports = SereneMaster;
