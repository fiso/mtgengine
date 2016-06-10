"use strict";
const Constants = require ("../../../Constants");
const ReclamationSageBase = require("../setC14/ReclamationSage");

class ReclamationSage extends ReclamationSageBase {
  constructor (game) {
    super(game, "Reclamation Sage", "Magic Game Day", "pMGD");
  }
}

module.exports = ReclamationSage;
