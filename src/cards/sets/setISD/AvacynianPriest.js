"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvacynianPriest extends UnimplementedCard {
  constructor(game) {
    super(game, "Avacynian Priest", "Innistrad", "ISD");
  }
}

module.exports = AvacynianPriest;
