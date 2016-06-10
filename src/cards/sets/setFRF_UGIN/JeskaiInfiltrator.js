"use strict";
const Constants = require ("../../../Constants");
const JeskaiInfiltratorBase = require("../setFRF/JeskaiInfiltrator");

class JeskaiInfiltrator extends JeskaiInfiltratorBase {
  constructor (game) {
    super(game, "Jeskai Infiltrator", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = JeskaiInfiltrator;
