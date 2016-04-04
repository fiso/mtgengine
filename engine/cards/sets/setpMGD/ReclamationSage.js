"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReclamationSageBase = require("../setC14/ReclamationSage.js");

class ReclamationSage extends ReclamationSageBase {
  constructor(game) {
    super(game, "Reclamation Sage", "Magic Game Day", "pMGD");
  }
}

module.exports = ReclamationSage;
