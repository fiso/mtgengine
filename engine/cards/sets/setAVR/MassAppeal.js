"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MassAppeal extends Card {
  constructor(game) {
    super(game, "Mass Appeal", "Avacyn Restored", "AVR");
  }
}

module.exports = MassAppeal;
