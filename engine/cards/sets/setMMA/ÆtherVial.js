"use strict";
const Constants = require ("../../../Constants");
const ÆtherVialBase = require("../setDST/ÆtherVial");

class ÆtherVial extends ÆtherVialBase {
  constructor(game) {
    super(game, "Æther Vial", "Modern Masters", "MMA");
  }
}

module.exports = ÆtherVial;
