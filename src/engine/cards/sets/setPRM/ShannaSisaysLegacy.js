"use strict";
const Constants = require ("../../../Constants");
const ShannaSisaysLegacyBase = require("../setDOM/ShannaSisaysLegacy");

class ShannaSisaysLegacy extends ShannaSisaysLegacyBase {
  constructor (game) {
    super(game, "Shanna, Sisay's Legacy", "Magic Online Promos", "PRM");
  }
}

module.exports = ShannaSisaysLegacy;
