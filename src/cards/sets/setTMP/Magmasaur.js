"use strict";
const Constants = require ("../../../Constants");
const MagmasaurBase = require("../setTPR/Magmasaur");

class Magmasaur extends MagmasaurBase {
  constructor (game) {
    super(game, "Magmasaur", "Tempest", "TMP");
  }
}

module.exports = Magmasaur;
