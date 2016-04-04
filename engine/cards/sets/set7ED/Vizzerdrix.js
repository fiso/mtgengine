"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VizzerdrixBase = require("../set8ED/Vizzerdrix.js");

class Vizzerdrix extends VizzerdrixBase {
  constructor(game) {
    super(game, "Vizzerdrix", "Seventh Edition", "7ED");
  }
}

module.exports = Vizzerdrix;
