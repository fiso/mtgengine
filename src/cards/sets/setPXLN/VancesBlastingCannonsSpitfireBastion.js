"use strict";
const Constants = require ("../../../Constants");
const VancesBlastingCannonsSpitfireBastionBase = require("../setPXTC/VancesBlastingCannonsSpitfireBastion");

class VancesBlastingCannonsSpitfireBastion extends VancesBlastingCannonsSpitfireBastionBase {
  constructor (game) {
    super(game, "Vance's Blasting Cannons // Spitfire Bastion", "Ixalan Promos", "PXLN");
  }
}

module.exports = VancesBlastingCannonsSpitfireBastion;
