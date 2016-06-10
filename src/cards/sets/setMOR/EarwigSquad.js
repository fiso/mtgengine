"use strict";
const Constants = require ("../../../Constants");
const EarwigSquadBase = require("../setpLPA/EarwigSquad");

class EarwigSquad extends EarwigSquadBase {
  constructor (game) {
    super(game, "Earwig Squad", "Morningtide", "MOR");
  }
}

module.exports = EarwigSquad;
