"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JohtullWurmBase = require("../set5ED/JohtullWurm.js");

class JohtullWurm extends JohtullWurmBase {
  constructor(game) {
    super(game, "Johtull Wurm", "Masters Edition II", "ME2");
  }
}

module.exports = JohtullWurm;
