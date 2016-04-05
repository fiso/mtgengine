"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalPalace extends UnimplementedCard {
  constructor(game) {
    super(game, "Opal Palace", "Commander 2013 Edition", "C13");
  }
}

module.exports = OpalPalace;
