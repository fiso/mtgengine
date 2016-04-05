"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CometStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Comet Storm", "Commander 2015", "C15");
  }
}

module.exports = CometStorm;
