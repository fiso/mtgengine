"use strict";
const Constants = require ("../../../Constants");
const EarwigSquadBase = require("../setMMA/EarwigSquad");

class EarwigSquad extends EarwigSquadBase {
  constructor (game) {
    super(game, "Earwig Squad", "Magic Online Promos", "PRM");
  }
}

module.exports = EarwigSquad;
