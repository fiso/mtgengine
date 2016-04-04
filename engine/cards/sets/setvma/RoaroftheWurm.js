"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RoaroftheWurmBase = require("../setpFNM/RoaroftheWurm.js");

class RoaroftheWurm extends RoaroftheWurmBase {
  constructor(game) {
    super(game, "Roar of the Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = RoaroftheWurm;
