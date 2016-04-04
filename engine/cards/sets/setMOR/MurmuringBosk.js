"use strict";
const Constants = require ("../../../Constants");
const MurmuringBoskBase = require("../setV12/MurmuringBosk");

class MurmuringBosk extends MurmuringBoskBase {
  constructor(game) {
    super(game, "Murmuring Bosk", "Morningtide", "MOR");
  }
}

module.exports = MurmuringBosk;
