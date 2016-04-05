"use strict";
const Constants = require ("../../../Constants");
const PsionicBlastBase = require("../setCED/PsionicBlast");

class PsionicBlast extends PsionicBlastBase {
  constructor(game) {
    super(game, "Psionic Blast", "International Collector's Edition", "CEI");
  }
}

module.exports = PsionicBlast;
