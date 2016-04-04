"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EbonPraetorBase = require("../setFEM/EbonPraetor.js");

class EbonPraetor extends EbonPraetorBase {
  constructor(game) {
    super(game, "Ebon Praetor", "Masters Edition II", "ME2");
  }
}

module.exports = EbonPraetor;
