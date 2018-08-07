"use strict";
const Constants = require ("../../../Constants");
const ZurtheEnchanterBase = require("../setMM3/ZurtheEnchanter");

class ZurtheEnchanter extends ZurtheEnchanterBase {
  constructor (game) {
    super(game, "Zur the Enchanter", "Commander's Arsenal Oversized", "OCM1");
  }
}

module.exports = ZurtheEnchanter;
