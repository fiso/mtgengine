"use strict";
const Constants = require ("../../../Constants");
const GatekeeperofMalakirBase = require("../setDDK/GatekeeperofMalakir");

class GatekeeperofMalakir extends GatekeeperofMalakirBase {
  constructor (game) {
    super(game, "Gatekeeper of Malakir", "Friday Night Magic 2010", "F10");
  }
}

module.exports = GatekeeperofMalakir;
