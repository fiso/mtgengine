"use strict";
const Constants = require ("../../../Constants");
const HalimarDepthsBase = require("../setC18/HalimarDepths");

class HalimarDepths extends HalimarDepthsBase {
  constructor (game) {
    super(game, "Halimar Depths", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = HalimarDepths;
