"use strict";
const Constants = require ("../../../Constants");
const AssaultSuitBase = require("../setCMA/AssaultSuit");

class AssaultSuit extends AssaultSuitBase {
  constructor (game) {
    super(game, "Assault Suit", "Commander 2016", "C16");
  }
}

module.exports = AssaultSuit;
