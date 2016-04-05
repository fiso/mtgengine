"use strict";
const Constants = require ("../../../Constants");
const VolrathsCurseBase = require("../setTMP/VolrathsCurse");

class VolrathsCurse extends VolrathsCurseBase {
  constructor(game) {
    super(game, "Volrath's Curse", "Tempest Remastered", "TPR");
  }
}

module.exports = VolrathsCurse;
