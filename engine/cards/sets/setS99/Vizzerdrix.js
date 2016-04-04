"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VizzerdrixBase = require("../set8ED/Vizzerdrix.js");

class Vizzerdrix extends VizzerdrixBase {
  constructor(game) {
    super(game, "Vizzerdrix", "Starter 1999", "S99");
  }
}

module.exports = Vizzerdrix;
