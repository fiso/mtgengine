"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrosswayVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Crossway Vampire", "Innistrad", "ISD");
  }
}

module.exports = CrosswayVampire;
