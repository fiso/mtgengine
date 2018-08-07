"use strict";
const Constants = require ("../../../Constants");
const LordoftheUndeadBase = require("../set10E/LordoftheUndead");

class LordoftheUndead extends LordoftheUndeadBase {
  constructor (game) {
    super(game, "Lord of the Undead", "Planeshift", "PLS");
  }
}

module.exports = LordoftheUndead;
