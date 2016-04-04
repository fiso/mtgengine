"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasChaliceBase = require("../setATQ/UrzasChalice.js");

class UrzasChalice extends UrzasChaliceBase {
  constructor(game) {
    super(game, "Urza's Chalice", "Masters Edition", "MED");
  }
}

module.exports = UrzasChalice;
