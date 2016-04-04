"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JeskaiInfiltratorBase = require("../setFRF/JeskaiInfiltrator.js");

class JeskaiInfiltrator extends JeskaiInfiltratorBase {
  constructor(game) {
    super(game, "Jeskai Infiltrator", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = JeskaiInfiltrator;
