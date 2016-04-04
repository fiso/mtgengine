"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DivineFavorBase = require("../setM12/DivineFavor.js");

class DivineFavor extends DivineFavorBase {
  constructor(game) {
    super(game, "Divine Favor", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DivineFavor;
