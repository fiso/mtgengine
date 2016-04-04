"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkirsdagHighPriestBase = require("../setC14/SkirsdagHighPriest.js");

class SkirsdagHighPriest extends SkirsdagHighPriestBase {
  constructor(game) {
    super(game, "Skirsdag High Priest", "Innistrad", "ISD");
  }
}

module.exports = SkirsdagHighPriest;
