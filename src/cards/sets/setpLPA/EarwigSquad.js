"use strict";
const Constants = require ("../../../Constants");
const EarwigSquadBase = require("../setMMA/EarwigSquad");

class EarwigSquad extends EarwigSquadBase {
  constructor (game) {
    super(game, "Earwig Squad", "Launch Parties", "PLPA");
  }
}

module.exports = EarwigSquad;
