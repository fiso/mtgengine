"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KaradorGhostChieftainBase = require("../setpJGP/KaradorGhostChieftain.js");

class KaradorGhostChieftain extends KaradorGhostChieftainBase {
  constructor(game) {
    super(game, "Karador, Ghost Chieftain", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = KaradorGhostChieftain;
