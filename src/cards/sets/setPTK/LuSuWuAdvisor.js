"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuSuWuAdvisor extends UnimplementedCard {
  constructor (game) {
    super(game, "Lu Su, Wu Advisor", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LuSuWuAdvisor;
