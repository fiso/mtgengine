"use strict";
const Constants = require ("../../../Constants");
const MerfolkBase = require("../setTXLN/Merfolk");

class Merfolk extends MerfolkBase {
  constructor (game) {
    super(game, "Merfolk", "Zendikar Tokens", "TZEN");
  }
}

module.exports = Merfolk;
