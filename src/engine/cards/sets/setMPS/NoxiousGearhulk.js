"use strict";
const Constants = require ("../../../Constants");
const NoxiousGearhulkBase = require("../setKLD/NoxiousGearhulk");

class NoxiousGearhulk extends NoxiousGearhulkBase {
  constructor (game) {
    super(game, "Noxious Gearhulk", "Kaladesh Inventions", "MPS");
  }
}

module.exports = NoxiousGearhulk;
