"use strict";
const Constants = require ("../../../Constants");
const KaradorGhostChieftainBase = require("../setJ14/KaradorGhostChieftain");

class KaradorGhostChieftain extends KaradorGhostChieftainBase {
  constructor (game) {
    super(game, "Karador, Ghost Chieftain", "Magic Online Promos", "PRM");
  }
}

module.exports = KaradorGhostChieftain;
