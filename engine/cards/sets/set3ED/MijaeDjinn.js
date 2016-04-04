"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MijaeDjinnBase = require("../setARN/MijaeDjinn.js");

class MijaeDjinn extends MijaeDjinnBase {
  constructor(game) {
    super(game, "Mijae Djinn", "Revised Edition", "3ED");
  }
}

module.exports = MijaeDjinn;
