"use strict";
const Constants = require ("../../../Constants");
const LeshracsRiteBase = require("../set6ED/LeshracsRite");

class LeshracsRite extends LeshracsRiteBase {
  constructor(game) {
    super(game, "Leshrac's Rite", "Seventh Edition", "7ED");
  }
}

module.exports = LeshracsRite;
