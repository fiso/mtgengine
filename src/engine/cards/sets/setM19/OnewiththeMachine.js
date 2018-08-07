"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnewiththeMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "One with the Machine", "Core Set 2019", "M19");
  }
}

module.exports = OnewiththeMachine;
