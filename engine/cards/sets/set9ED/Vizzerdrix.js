"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VizzerdrixBase = require("../set8ED/Vizzerdrix.js");

class Vizzerdrix extends VizzerdrixBase {
  constructor(game) {
    super(game, "Vizzerdrix", "Ninth Edition", "9ED");
  }
}

module.exports = Vizzerdrix;
