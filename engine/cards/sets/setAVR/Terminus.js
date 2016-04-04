"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Terminus extends Card {
  constructor(game) {
    super(game, "Terminus", "Avacyn Restored", "AVR");
  }
}

module.exports = Terminus;
