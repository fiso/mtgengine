"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoltariTrooperBase = require("../setTMP/SoltariTrooper.js");

class SoltariTrooper extends SoltariTrooperBase {
  constructor(game) {
    super(game, "Soltari Trooper", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariTrooper;
