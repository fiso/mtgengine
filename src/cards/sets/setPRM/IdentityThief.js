"use strict";
const Constants = require ("../../../Constants");
const IdentityThiefBase = require("../setEMN/IdentityThief");

class IdentityThief extends IdentityThiefBase {
  constructor (game) {
    super(game, "Identity Thief", "Magic Online Promos", "PRM");
  }
}

module.exports = IdentityThief;
