"use strict";
const Constants = require ("../../../Constants");
const NaturesCloakBase = require("../setPOR/NaturesCloak");

class NaturesCloak extends NaturesCloakBase {
  constructor(game) {
    super(game, "Nature's Cloak", "Starter 1999", "S99");
  }
}

module.exports = NaturesCloak;
