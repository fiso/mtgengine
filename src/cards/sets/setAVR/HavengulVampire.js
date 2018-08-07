"use strict";
const Constants = require ("../../../Constants");
const HavengulVampireBase = require("../setCN2/HavengulVampire");

class HavengulVampire extends HavengulVampireBase {
  constructor (game) {
    super(game, "Havengul Vampire", "Avacyn Restored", "AVR");
  }
}

module.exports = HavengulVampire;
