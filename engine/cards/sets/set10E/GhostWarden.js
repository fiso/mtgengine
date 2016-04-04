"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostWardenBase = require("../setGPT/GhostWarden.js");

class GhostWarden extends GhostWardenBase {
  constructor(game) {
    super(game, "Ghost Warden", "Tenth Edition", "10E");
  }
}

module.exports = GhostWarden;
