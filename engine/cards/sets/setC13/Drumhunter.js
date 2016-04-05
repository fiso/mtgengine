"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Drumhunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Drumhunter", "Commander 2013 Edition", "C13");
  }
}

module.exports = Drumhunter;
