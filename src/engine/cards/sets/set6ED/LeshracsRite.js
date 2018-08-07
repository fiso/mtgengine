"use strict";
const Constants = require ("../../../Constants");
const LeshracsRiteBase = require("../set7ED/LeshracsRite");

class LeshracsRite extends LeshracsRiteBase {
  constructor (game) {
    super(game, "Leshrac's Rite", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LeshracsRite;
