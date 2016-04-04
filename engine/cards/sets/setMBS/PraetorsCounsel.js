"use strict";
const Constants = require ("../../../Constants");
const PraetorsCounselBase = require("../setC14/PraetorsCounsel");

class PraetorsCounsel extends PraetorsCounselBase {
  constructor(game) {
    super(game, "Praetor's Counsel", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PraetorsCounsel;
