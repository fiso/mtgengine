"use strict";
const Constants = require ("../../../Constants");
const BullCerodonBase = require("../setHOP/BullCerodon");

class BullCerodon extends BullCerodonBase {
  constructor (game) {
    super(game, "Bull Cerodon", "Shards of Alara", "ALA");
  }
}

module.exports = BullCerodon;
