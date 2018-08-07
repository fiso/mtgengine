"use strict";
const Constants = require ("../../../Constants");
const AssaultSuitBase = require("../setCMA/AssaultSuit");

class AssaultSuit extends AssaultSuitBase {
  constructor (game) {
    super(game, "Assault Suit", "Commander 2014", "C14");
  }
}

module.exports = AssaultSuit;
