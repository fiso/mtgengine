"use strict";
const Constants = require ("../../../Constants");
const AvatarofDiscordBase = require("../setARC/AvatarofDiscord");

class AvatarofDiscord extends AvatarofDiscordBase {
  constructor (game) {
    super(game, "Avatar of Discord", "Magic Online Promos", "PRM");
  }
}

module.exports = AvatarofDiscord;
