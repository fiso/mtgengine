"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeeperoftheMind extends Card {
  constructor(game) {
    super(game, "Keeper of the Mind", "Exodus", "EXO");
  }
}

module.exports = KeeperoftheMind;
