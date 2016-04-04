"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HandofJusticeBase = require("../setFEM/HandofJustice.js");

class HandofJustice extends HandofJusticeBase {
  constructor(game) {
    super(game, "Hand of Justice", "Masters Edition", "MED");
  }
}

module.exports = HandofJustice;
