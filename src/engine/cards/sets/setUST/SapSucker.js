"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SapSucker extends UnimplementedCard {
  constructor (game) {
    super(game, "Sap Sucker", "Unstable", "UST");
  }
}

module.exports = SapSucker;
