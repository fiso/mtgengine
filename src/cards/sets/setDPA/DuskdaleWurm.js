"use strict";
const Constants = require ("../../../Constants");
const DuskdaleWurmBase = require("../setIMA/DuskdaleWurm");

class DuskdaleWurm extends DuskdaleWurmBase {
  constructor (game) {
    super(game, "Duskdale Wurm", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DuskdaleWurm;
