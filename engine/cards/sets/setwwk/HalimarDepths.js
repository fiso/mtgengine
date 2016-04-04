"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HalimarDepthsBase = require("../setDDM/HalimarDepths.js");

class HalimarDepths extends HalimarDepthsBase {
  constructor(game) {
    super(game, "Halimar Depths", "Worldwake", "WWK");
  }
}

module.exports = HalimarDepths;
