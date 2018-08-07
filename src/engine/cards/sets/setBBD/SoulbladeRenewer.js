"use strict";
const Constants = require ("../../../Constants");
const SoulbladeRenewerBase = require("../setPBBD/SoulbladeRenewer");

class SoulbladeRenewer extends SoulbladeRenewerBase {
  constructor (game) {
    super(game, "Soulblade Renewer", "Battlebond", "BBD");
  }
}

module.exports = SoulbladeRenewer;
