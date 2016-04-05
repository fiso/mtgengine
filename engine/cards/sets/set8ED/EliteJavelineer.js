"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliteJavelineer extends UnimplementedCard {
  constructor(game) {
    super(game, "Elite Javelineer", "Eighth Edition", "8ED");
  }
}

module.exports = EliteJavelineer;
