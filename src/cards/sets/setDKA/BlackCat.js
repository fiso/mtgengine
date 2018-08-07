"use strict";
const Constants = require ("../../../Constants");
const BlackCatBase = require("../setM15/BlackCat");

class BlackCat extends BlackCatBase {
  constructor (game) {
    super(game, "Black Cat", "Dark Ascension", "DKA");
  }
}

module.exports = BlackCat;
