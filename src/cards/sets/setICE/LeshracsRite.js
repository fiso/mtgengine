"use strict";
const Constants = require ("../../../Constants");
const LeshracsRiteBase = require("../set6ED/LeshracsRite");

class LeshracsRite extends LeshracsRiteBase {
  constructor(game) {
    super(game, "Leshrac's Rite", "Ice Age", "ICE");
  }
}

module.exports = LeshracsRite;