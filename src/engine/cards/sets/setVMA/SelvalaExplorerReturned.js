"use strict";
const Constants = require ("../../../Constants");
const SelvalaExplorerReturnedBase = require("../setC16/SelvalaExplorerReturned");

class SelvalaExplorerReturned extends SelvalaExplorerReturnedBase {
  constructor (game) {
    super(game, "Selvala, Explorer Returned", "Vintage Masters", "VMA");
  }
}

module.exports = SelvalaExplorerReturned;
