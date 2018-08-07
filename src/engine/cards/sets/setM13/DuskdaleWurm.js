"use strict";
const Constants = require ("../../../Constants");
const DuskdaleWurmBase = require("../setIMA/DuskdaleWurm");

class DuskdaleWurm extends DuskdaleWurmBase {
  constructor (game) {
    super(game, "Duskdale Wurm", "Magic 2013", "M13");
  }
}

module.exports = DuskdaleWurm;
