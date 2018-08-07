"use strict";
const Constants = require ("../../../Constants");
const ReclamationSageBase = require("../setC18/ReclamationSage");

class ReclamationSage extends ReclamationSageBase {
  constructor (game) {
    super(game, "Reclamation Sage", "Magic 2015", "M15");
  }
}

module.exports = ReclamationSage;
