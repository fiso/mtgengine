"use strict";
const Constants = require ("../../../Constants");
const GhostWardenBase = require("../setGPT/GhostWarden");

class GhostWarden extends GhostWardenBase {
  constructor (game) {
    super(game, "Ghost Warden", "Tenth Edition", "10E");
  }
}

module.exports = GhostWarden;
