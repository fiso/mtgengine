"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MurmuringBoskBase = require("../setV12/MurmuringBosk.js");

class MurmuringBosk extends MurmuringBoskBase {
  constructor(game) {
    super(game, "Murmuring Bosk", "Morningtide", "MOR");
  }
}

module.exports = MurmuringBosk;
