"use strict";
const Constants = require ("../../../Constants");
const HeirloomBladeBase = require("../setC17/HeirloomBlade");

class HeirloomBlade extends HeirloomBladeBase {
  constructor (game) {
    super(game, "Heirloom Blade", "You Make the Cube", "PZ2");
  }
}

module.exports = HeirloomBlade;
