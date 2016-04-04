"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MidvastProtector extends Card {
  constructor(game) {
    super(game, "Midvast Protector", "Avacyn Restored", "AVR");
  }
}

module.exports = MidvastProtector;
