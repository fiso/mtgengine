"use strict";
const Constants = require ("../../../Constants");
const ArrogantWurmBase = require("../setVMA/ArrogantWurm");

class ArrogantWurm extends ArrogantWurmBase {
  constructor (game) {
    super(game, "Arrogant Wurm", "World Championship Decks 2003", "WC03");
  }
}

module.exports = ArrogantWurm;
