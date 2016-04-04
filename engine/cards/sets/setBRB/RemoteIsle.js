"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RemoteIsle extends Card {
  constructor(game) {
    super(game, "Remote Isle", "Battle Royale Box Set", "BRB");
  }
}

module.exports = RemoteIsle;
