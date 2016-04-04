"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReclamationSageBase = require("../setC14/ReclamationSage.js");

class ReclamationSage extends ReclamationSageBase {
  constructor(game) {
    super(game, "Reclamation Sage", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ReclamationSage;
