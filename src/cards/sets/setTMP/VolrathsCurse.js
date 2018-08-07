"use strict";
const Constants = require ("../../../Constants");
const VolrathsCurseBase = require("../setTPR/VolrathsCurse");

class VolrathsCurse extends VolrathsCurseBase {
  constructor (game) {
    super(game, "Volrath's Curse", "Tempest", "TMP");
  }
}

module.exports = VolrathsCurse;
