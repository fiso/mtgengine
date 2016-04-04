"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fallowsage extends UnimplementedCard {
  constructor(game) {
    super(game, "Fallowsage", "Lorwyn", "LRW");
  }
}

module.exports = Fallowsage;
