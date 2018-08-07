"use strict";
const Constants = require ("../../../Constants");
const CombustibleGearhulkBase = require("../setKLD/CombustibleGearhulk");

class CombustibleGearhulk extends CombustibleGearhulkBase {
  constructor (game) {
    super(game, "Combustible Gearhulk", "Kaladesh Inventions", "MPS");
  }
}

module.exports = CombustibleGearhulk;
