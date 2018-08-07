"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuSuWuAdvisor extends UnimplementedCard {
  constructor (game) {
    super(game, "Lu Su, Wu Advisor", "You Make the Cube", "PZ2");
  }
}

module.exports = LuSuWuAdvisor;
