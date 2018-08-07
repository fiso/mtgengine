"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathlace extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathlace", "Fourth Edition", "4ED");
  }
}

module.exports = Deathlace;
