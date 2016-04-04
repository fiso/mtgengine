"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostbladeEidolonBase = require("../setBNG/GhostbladeEidolon.js");

class GhostbladeEidolon extends GhostbladeEidolonBase {
  constructor(game) {
    super(game, "Ghostblade Eidolon", "Commander 2015", "C15");
  }
}

module.exports = GhostbladeEidolon;
