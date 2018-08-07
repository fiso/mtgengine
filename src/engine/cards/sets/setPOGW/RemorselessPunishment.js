"use strict";
const Constants = require ("../../../Constants");
const RemorselessPunishmentBase = require("../setOGW/RemorselessPunishment");

class RemorselessPunishment extends RemorselessPunishmentBase {
  constructor (game) {
    super(game, "Remorseless Punishment", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = RemorselessPunishment;
