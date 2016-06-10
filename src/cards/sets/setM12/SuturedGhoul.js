"use strict";
const Constants = require ("../../../Constants");
const SuturedGhoulBase = require("../setJUD/SuturedGhoul");

class SuturedGhoul extends SuturedGhoulBase {
  constructor (game) {
    super(game, "Sutured Ghoul", "Magic 2012", "M12");
  }
}

module.exports = SuturedGhoul;
