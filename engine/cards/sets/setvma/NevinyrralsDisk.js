"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NevinyrralsDiskBase = require("../setATH/NevinyrralsDisk.js");

class NevinyrralsDisk extends NevinyrralsDiskBase {
  constructor(game) {
    super(game, "Nevinyrral's Disk", "Vintage Masters", "VMA");
  }
}

module.exports = NevinyrralsDisk;
