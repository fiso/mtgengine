"use strict";
const Constants = require ("../../../Constants");
const NevinyrralsDiskBase = require("../setC17/NevinyrralsDisk");

class NevinyrralsDisk extends NevinyrralsDiskBase {
  constructor (game) {
    super(game, "Nevinyrral's Disk", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = NevinyrralsDisk;
