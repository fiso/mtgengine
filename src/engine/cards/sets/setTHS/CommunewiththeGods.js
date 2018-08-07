"use strict";
const Constants = require ("../../../Constants");
const CommunewiththeGodsBase = require("../setEMA/CommunewiththeGods");

class CommunewiththeGods extends CommunewiththeGodsBase {
  constructor (game) {
    super(game, "Commune with the Gods", "Theros", "THS");
  }
}

module.exports = CommunewiththeGods;
