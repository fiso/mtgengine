"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuskdaleWurmBase = require("../setDPA/DuskdaleWurm.js");

class DuskdaleWurm extends DuskdaleWurmBase {
  constructor(game) {
    super(game, "Duskdale Wurm", "Eventide", "EVE");
  }
}

module.exports = DuskdaleWurm;
