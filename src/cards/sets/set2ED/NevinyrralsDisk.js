"use strict";
const Constants = require ("../../../Constants");
const NevinyrralsDiskBase = require("../setATH/NevinyrralsDisk");

class NevinyrralsDisk extends NevinyrralsDiskBase {
  constructor (game) {
    super(game, "Nevinyrral's Disk", "Unlimited Edition", "2ED");
  }
}

module.exports = NevinyrralsDisk;
