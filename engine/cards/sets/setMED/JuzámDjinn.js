"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JuzámDjinnBase = require("../setARN/JuzámDjinn.js");

class JuzámDjinn extends JuzámDjinnBase {
  constructor(game) {
    super(game, "Juzám Djinn", "Masters Edition", "MED");
  }
}

module.exports = JuzámDjinn;
