"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolrathsCurseBase = require("../setTMP/VolrathsCurse.js");

class VolrathsCurse extends VolrathsCurseBase {
  constructor(game) {
    super(game, "Volrath's Curse", "Tempest Remastered", "TPR");
  }
}

module.exports = VolrathsCurse;
