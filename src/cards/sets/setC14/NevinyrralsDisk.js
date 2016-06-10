"use strict";
const Constants = require ("../../../Constants");
const NevinyrralsDiskBase = require("../setATH/NevinyrralsDisk");

class NevinyrralsDisk extends NevinyrralsDiskBase {
  constructor (game) {
    super(game, "Nevinyrral's Disk", "Commander 2014", "C14");
  }
}

module.exports = NevinyrralsDisk;
