"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SustaineroftheRealmBase = require("../setDD3_DVD/SustaineroftheRealm.js");

class SustaineroftheRealm extends SustaineroftheRealmBase {
  constructor(game) {
    super(game, "Sustainer of the Realm", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = SustaineroftheRealm;
