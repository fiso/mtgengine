"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BullCerodonBase = require("../setHOP/BullCerodon.js");

class BullCerodon extends BullCerodonBase {
  constructor(game) {
    super(game, "Bull Cerodon", "Shards of Alara", "ALA");
  }
}

module.exports = BullCerodon;
