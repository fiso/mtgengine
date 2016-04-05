"use strict";
const Constants = require ("../../../Constants");
const LordoftheUndeadBase = require("../set8ED/LordoftheUndead");

class LordoftheUndead extends LordoftheUndeadBase {
  constructor(game) {
    super(game, "Lord of the Undead", "Tenth Edition", "10E");
  }
}

module.exports = LordoftheUndead;
