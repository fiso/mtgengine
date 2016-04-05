"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortalsArdor extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortal's Ardor", "Born of the Gods", "BNG");
  }
}

module.exports = MortalsArdor;
