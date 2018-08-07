"use strict";
const Constants = require ("../../../Constants");
const NevinyrralsDiskBase = require("../setC17/NevinyrralsDisk");

class NevinyrralsDisk extends NevinyrralsDiskBase {
  constructor (game) {
    super(game, "Nevinyrral's Disk", "Vintage Masters", "VMA");
  }
}

module.exports = NevinyrralsDisk;
