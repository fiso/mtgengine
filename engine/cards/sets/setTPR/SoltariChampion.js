"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoltariChampionBase = require("../setSTH/SoltariChampion.js");

class SoltariChampion extends SoltariChampionBase {
  constructor(game) {
    super(game, "Soltari Champion", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariChampion;
