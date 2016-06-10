"use strict";
const Constants = require ("../../../Constants");
const NevinyrralsDiskBase = require("../setATH/NevinyrralsDisk");

class NevinyrralsDisk extends NevinyrralsDiskBase {
  constructor (game) {
    super(game, "Nevinyrral's Disk", "Masters Edition", "MED");
  }
}

module.exports = NevinyrralsDisk;
