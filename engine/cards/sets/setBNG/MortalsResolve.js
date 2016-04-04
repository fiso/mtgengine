"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MortalsResolve extends Card {
  constructor(game) {
    super(game, "Mortal's Resolve", "Born of the Gods", "BNG");
  }
}

module.exports = MortalsResolve;
