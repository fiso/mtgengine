"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Viseling extends UnimplementedCard {
  constructor(game) {
    super(game, "Viseling", "Commander 2013 Edition", "C13");
  }
}

module.exports = Viseling;
