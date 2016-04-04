"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Outwit extends Card {
  constructor(game) {
    super(game, "Outwit", "Avacyn Restored", "AVR");
  }
}

module.exports = Outwit;
