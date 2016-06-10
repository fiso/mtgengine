"use strict";
const Constants = require ("../../../Constants");
const EbonPraetorBase = require("../setFEM/EbonPraetor");

class EbonPraetor extends EbonPraetorBase {
  constructor (game) {
    super(game, "Ebon Praetor", "Masters Edition II", "ME2");
  }
}

module.exports = EbonPraetor;
