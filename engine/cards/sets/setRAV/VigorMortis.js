"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VigorMortisBase = require("../setDDJ/VigorMortis.js");

class VigorMortis extends VigorMortisBase {
  constructor(game) {
    super(game, "Vigor Mortis", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VigorMortis;
