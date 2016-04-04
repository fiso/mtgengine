"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DirtcowlWurmBase = require("../setBRB/DirtcowlWurm.js");

class DirtcowlWurm extends DirtcowlWurmBase {
  constructor(game) {
    super(game, "Dirtcowl Wurm", "Tempest", "TMP");
  }
}

module.exports = DirtcowlWurm;
