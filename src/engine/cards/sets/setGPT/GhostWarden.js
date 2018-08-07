"use strict";
const Constants = require ("../../../Constants");
const GhostWardenBase = require("../set10E/GhostWarden");

class GhostWarden extends GhostWardenBase {
  constructor (game) {
    super(game, "Ghost Warden", "Guildpact", "GPT");
  }
}

module.exports = GhostWarden;
