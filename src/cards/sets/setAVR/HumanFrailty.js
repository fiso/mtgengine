"use strict";
const Constants = require ("../../../Constants");
const HumanFrailtyBase = require("../setDDQ/HumanFrailty");

class HumanFrailty extends HumanFrailtyBase {
  constructor (game) {
    super(game, "Human Frailty", "Avacyn Restored", "AVR");
  }
}

module.exports = HumanFrailty;
