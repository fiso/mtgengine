"use strict";
const Constants = require ("../../../Constants");
const NaturesCloakBase = require("../setS99/NaturesCloak");

class NaturesCloak extends NaturesCloakBase {
  constructor (game) {
    super(game, "Nature's Cloak", "Portal", "POR");
  }
}

module.exports = NaturesCloak;
