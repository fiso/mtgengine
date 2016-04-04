"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolrathsStrongholdBase = require("../setSTH/VolrathsStronghold.js");

class VolrathsStronghold extends VolrathsStrongholdBase {
  constructor(game) {
    super(game, "Volrath's Stronghold", "Tempest Remastered", "TPR");
  }
}

module.exports = VolrathsStronghold;
