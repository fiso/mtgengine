"use strict";
const Constants = require ("../../../Constants");
const AbyssalGatekeeperBase = require("../setDD3_DVD/AbyssalGatekeeper");

class AbyssalGatekeeper extends AbyssalGatekeeperBase {
  constructor(game) {
    super(game, "Abyssal Gatekeeper", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AbyssalGatekeeper;
