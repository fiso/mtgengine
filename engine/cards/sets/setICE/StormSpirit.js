"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Storm Spirit", "Ice Age", "ICE");
  }
}

module.exports = StormSpirit;
