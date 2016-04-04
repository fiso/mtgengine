"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FellShepherd extends UnimplementedCard {
  constructor(game) {
    super(game, "Fell Shepherd", "Commander 2013 Edition", "C13");
  }
}

module.exports = FellShepherd;
