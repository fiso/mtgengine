"use strict";
const Constants = require ("../../../Constants");
const KumenasAwakeningBase = require("../setPRIX/KumenasAwakening");

class KumenasAwakening extends KumenasAwakeningBase {
  constructor (game) {
    super(game, "Kumena's Awakening", "Rivals of Ixalan", "RIX");
  }
}

module.exports = KumenasAwakening;
