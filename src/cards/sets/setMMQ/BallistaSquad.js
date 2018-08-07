"use strict";
const Constants = require ("../../../Constants");
const BallistaSquadBase = require("../set10E/BallistaSquad");

class BallistaSquad extends BallistaSquadBase {
  constructor (game) {
    super(game, "Ballista Squad", "Mercadian Masques", "MMQ");
  }
}

module.exports = BallistaSquad;
