"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbyssalGatekeeperBase = require("../setDD3_DVD/AbyssalGatekeeper.js");

class AbyssalGatekeeper extends AbyssalGatekeeperBase {
  constructor(game) {
    super(game, "Abyssal Gatekeeper", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AbyssalGatekeeper;
