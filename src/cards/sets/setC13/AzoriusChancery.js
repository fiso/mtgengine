"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusChancery extends UnimplementedCard {
  constructor(game) {
    super(game, "Azorius Chancery", "Commander 2013 Edition", "C13");
  }
}

module.exports = AzoriusChancery;
