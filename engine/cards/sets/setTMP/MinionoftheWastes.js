"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinionoftheWastes extends Card {
  constructor(game) {
    super(game, "Minion of the Wastes", "Tempest", "TMP");
  }
}

module.exports = MinionoftheWastes;
