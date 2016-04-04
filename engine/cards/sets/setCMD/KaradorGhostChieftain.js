"use strict";
const Constants = require ("../../../Constants");
const KaradorGhostChieftainBase = require("../setpJGP/KaradorGhostChieftain");

class KaradorGhostChieftain extends KaradorGhostChieftainBase {
  constructor(game) {
    super(game, "Karador, Ghost Chieftain", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = KaradorGhostChieftain;
