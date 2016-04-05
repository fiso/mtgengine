"use strict";
const Constants = require ("../../../Constants");
const StunBase = require("../setINV/Stun");

class Stun extends StunBase {
  constructor(game) {
    super(game, "Stun", "Tempest", "TMP");
  }
}

module.exports = Stun;
