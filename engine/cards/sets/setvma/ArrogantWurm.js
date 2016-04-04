"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArrogantWurmBase = require("../setpFNM/ArrogantWurm.js");

class ArrogantWurm extends ArrogantWurmBase {
  constructor(game) {
    super(game, "Arrogant Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = ArrogantWurm;
