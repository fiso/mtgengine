"use strict";
const Constants = require ("../../../Constants");
const SuturedGhoulBase = require("../setM12/SuturedGhoul");

class SuturedGhoul extends SuturedGhoulBase {
  constructor (game) {
    super(game, "Sutured Ghoul", "Judgment", "JUD");
  }
}

module.exports = SuturedGhoul;
