"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HisokasGuard extends Card {
  constructor(game) {
    super(game, "Hisoka's Guard", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HisokasGuard;
