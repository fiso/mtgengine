"use strict";
const Constants = require ("../../../Constants");
const MisinformationBase = require("../setME2/Misinformation");

class Misinformation extends MisinformationBase {
  constructor (game) {
    super(game, "Misinformation", "Alliances", "ALL");
  }
}

module.exports = Misinformation;
