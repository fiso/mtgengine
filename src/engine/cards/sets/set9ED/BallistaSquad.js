"use strict";
const Constants = require ("../../../Constants");
const BallistaSquadBase = require("../set10E/BallistaSquad");

class BallistaSquad extends BallistaSquadBase {
  constructor (game) {
    super(game, "Ballista Squad", "Ninth Edition", "9ED");
  }
}

module.exports = BallistaSquad;
