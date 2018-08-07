"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sanctimony extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctimony", "Eighth Edition", "8ED");
  }
}

module.exports = Sanctimony;
