"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtlace extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtlace", "Fourth Edition", "4ED");
  }
}

module.exports = Thoughtlace;
