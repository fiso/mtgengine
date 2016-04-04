"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnHavvaInn extends UnimplementedCard {
  constructor(game) {
    super(game, "An-Havva Inn", "Homelands", "HML");
  }
}

module.exports = AnHavvaInn;
