"use strict";
const Constants = require ("../../../Constants");
const BrainWeevilBase = require("../setDDJ/BrainWeevil");

class BrainWeevil extends BrainWeevilBase {
  constructor(game) {
    super(game, "Brain Weevil", "Innistrad", "ISD");
  }
}

module.exports = BrainWeevil;
