"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScarecrowBase = require("../setME4/Scarecrow.js");

class Scarecrow extends ScarecrowBase {
  constructor(game) {
    super(game, "Scarecrow", "The Dark", "DRK");
  }
}

module.exports = Scarecrow;
