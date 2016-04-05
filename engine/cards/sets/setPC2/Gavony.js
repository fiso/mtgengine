"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gavony extends UnimplementedCard {
  constructor(game) {
    super(game, "Gavony", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Gavony;
