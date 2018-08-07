"use strict";
const Constants = require ("../../../Constants");
const DirtcowlWurmBase = require("../setPRM/DirtcowlWurm");

class DirtcowlWurm extends DirtcowlWurmBase {
  constructor (game) {
    super(game, "Dirtcowl Wurm", "Battle Royale Box Set", "BRB");
  }
}

module.exports = DirtcowlWurm;
