"use strict";
const Constants = require ("../../../Constants");
const RazorfinHunterBase = require("../setPRM/RazorfinHunter");

class RazorfinHunter extends RazorfinHunterBase {
  constructor (game) {
    super(game, "Razorfin Hunter", "Apocalypse", "APC");
  }
}

module.exports = RazorfinHunter;
