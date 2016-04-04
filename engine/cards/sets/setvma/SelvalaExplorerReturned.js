"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelvalaExplorerReturnedBase = require("../setCNS/SelvalaExplorerReturned.js");

class SelvalaExplorerReturned extends SelvalaExplorerReturnedBase {
  constructor(game) {
    super(game, "Selvala, Explorer Returned", "Vintage Masters", "VMA");
  }
}

module.exports = SelvalaExplorerReturned;
