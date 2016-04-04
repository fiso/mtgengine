"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrainWeevilBase = require("../setDDJ/BrainWeevil.js");

class BrainWeevil extends BrainWeevilBase {
  constructor(game) {
    super(game, "Brain Weevil", "Innistrad", "ISD");
  }
}

module.exports = BrainWeevil;
