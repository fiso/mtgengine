"use strict";
const Constants = require ("../../../Constants");
const ScarecrowBase = require("../setME4/Scarecrow");

class Scarecrow extends ScarecrowBase {
  constructor (game) {
    super(game, "Scarecrow", "The Dark", "DRK");
  }
}

module.exports = Scarecrow;
