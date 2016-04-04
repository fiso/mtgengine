"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GatekeeperofMalakirBase = require("../setDDK/GatekeeperofMalakir.js");

class GatekeeperofMalakir extends GatekeeperofMalakirBase {
  constructor(game) {
    super(game, "Gatekeeper of Malakir", "Zendikar", "ZEN");
  }
}

module.exports = GatekeeperofMalakir;
