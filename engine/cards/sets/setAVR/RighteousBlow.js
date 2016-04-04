"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RighteousBlow extends Card {
  constructor(game) {
    super(game, "Righteous Blow", "Avacyn Restored", "AVR");
  }
}

module.exports = RighteousBlow;
