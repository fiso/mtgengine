"use strict";
const Constants = require ("../../../Constants");
const HalimarDepthsBase = require("../setDDM/HalimarDepths");

class HalimarDepths extends HalimarDepthsBase {
  constructor (game) {
    super(game, "Halimar Depths", "Worldwake", "WWK");
  }
}

module.exports = HalimarDepths;
