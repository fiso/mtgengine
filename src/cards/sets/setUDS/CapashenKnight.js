"use strict";
const Constants = require ("../../../Constants");
const CapashenKnightBase = require("../setM14/CapashenKnight");

class CapashenKnight extends CapashenKnightBase {
  constructor(game) {
    super(game, "Capashen Knight", "Urza's Destiny", "UDS");
  }
}

module.exports = CapashenKnight;
