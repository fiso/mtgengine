"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Derelor extends UnimplementedCard {
  constructor (game) {
    super(game, "Derelor", "Masters Edition", "MED");
  }
}

module.exports = Derelor;
