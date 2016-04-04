"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuturedGhoulBase = require("../setJUD/SuturedGhoul.js");

class SuturedGhoul extends SuturedGhoulBase {
  constructor(game) {
    super(game, "Sutured Ghoul", "Magic 2012", "M12");
  }
}

module.exports = SuturedGhoul;
