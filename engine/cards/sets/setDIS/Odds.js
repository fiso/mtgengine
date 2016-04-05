"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Odds extends UnimplementedCard {
  constructor(game) {
    super(game, "Odds", "Dissension", "DIS");
  }
}

module.exports = Odds;
