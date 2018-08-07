"use strict";
const Constants = require ("../../../Constants");
const ShieldedbyFaithBase = require("../setE02/ShieldedbyFaith");

class ShieldedbyFaith extends ShieldedbyFaithBase {
  constructor (game) {
    super(game, "Shielded by Faith", "Legendary Cube", "PZ1");
  }
}

module.exports = ShieldedbyFaith;
