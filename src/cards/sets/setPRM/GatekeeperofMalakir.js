"use strict";
const Constants = require ("../../../Constants");
const GatekeeperofMalakirBase = require("../setDDK/GatekeeperofMalakir");

class GatekeeperofMalakir extends GatekeeperofMalakirBase {
  constructor (game) {
    super(game, "Gatekeeper of Malakir", "Magic Online Promos", "PRM");
  }
}

module.exports = GatekeeperofMalakir;
