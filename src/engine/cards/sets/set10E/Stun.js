"use strict";
const Constants = require ("../../../Constants");
const StunBase = require("../setTPR/Stun");

class Stun extends StunBase {
  constructor (game) {
    super(game, "Stun", "Tenth Edition", "10E");
  }
}

module.exports = Stun;
