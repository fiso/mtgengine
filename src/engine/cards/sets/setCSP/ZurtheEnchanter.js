"use strict";
const Constants = require ("../../../Constants");
const ZurtheEnchanterBase = require("../setMM3/ZurtheEnchanter");

class ZurtheEnchanter extends ZurtheEnchanterBase {
  constructor (game) {
    super(game, "Zur the Enchanter", "Coldsnap", "CSP");
  }
}

module.exports = ZurtheEnchanter;
