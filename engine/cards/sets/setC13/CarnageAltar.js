"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnageAltar extends UnimplementedCard {
  constructor(game) {
    super(game, "Carnage Altar", "Commander 2013 Edition", "C13");
  }
}

module.exports = CarnageAltar;
