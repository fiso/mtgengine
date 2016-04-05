"use strict";
const Constants = require ("../../../Constants");
const NevinyrralsDiskBase = require("../setATH/NevinyrralsDisk");

class NevinyrralsDisk extends NevinyrralsDiskBase {
  constructor(game) {
    super(game, "Nevinyrral's Disk", "From the Vault: Relics", "V10");
  }
}

module.exports = NevinyrralsDisk;
