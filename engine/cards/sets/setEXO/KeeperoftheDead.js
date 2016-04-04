"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeeperoftheDead extends Card {
  constructor(game) {
    super(game, "Keeper of the Dead", "Exodus", "EXO");
  }
}

module.exports = KeeperoftheDead;
