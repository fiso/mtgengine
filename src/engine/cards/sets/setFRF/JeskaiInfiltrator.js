"use strict";
const Constants = require ("../../../Constants");
const JeskaiInfiltratorBase = require("../setC18/JeskaiInfiltrator");

class JeskaiInfiltrator extends JeskaiInfiltratorBase {
  constructor (game) {
    super(game, "Jeskai Infiltrator", "Fate Reforged", "FRF");
  }
}

module.exports = JeskaiInfiltrator;
