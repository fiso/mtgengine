"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VizzerdrixBase = require("../set8ED/Vizzerdrix.js");

class Vizzerdrix extends VizzerdrixBase {
  constructor(game) {
    super(game, "Vizzerdrix", "Starter 2000", "S00");
  }
}

module.exports = Vizzerdrix;
