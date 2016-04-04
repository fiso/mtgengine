"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LuSuWuAdvisor extends Card {
  constructor(game) {
    super(game, "Lu Su, Wu Advisor", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LuSuWuAdvisor;
