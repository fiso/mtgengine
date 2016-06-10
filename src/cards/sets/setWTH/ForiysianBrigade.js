"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForiysianBrigade extends UnimplementedCard {
  constructor (game) {
    super(game, "Foriysian Brigade", "Weatherlight", "WTH");
  }
}

module.exports = ForiysianBrigade;
