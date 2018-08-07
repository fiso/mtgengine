"use strict";
const Constants = require ("../../../Constants");
const LuSuWuAdvisorBase = require("../setPZ2/LuSuWuAdvisor");

class LuSuWuAdvisor extends LuSuWuAdvisorBase {
  constructor (game) {
    super(game, "Lu Su, Wu Advisor", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LuSuWuAdvisor;
