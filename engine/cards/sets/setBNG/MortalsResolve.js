"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortalsResolve extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortal's Resolve", "Born of the Gods", "BNG");
  }
}

module.exports = MortalsResolve;
