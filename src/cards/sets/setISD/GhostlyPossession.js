"use strict";
const Constants = require ("../../../Constants");
const GhostlyPossessionBase = require("../setCN2/GhostlyPossession");

class GhostlyPossession extends GhostlyPossessionBase {
  constructor (game) {
    super(game, "Ghostly Possession", "Innistrad", "ISD");
  }
}

module.exports = GhostlyPossession;
