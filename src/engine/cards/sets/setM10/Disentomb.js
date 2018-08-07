"use strict";
const Constants = require ("../../../Constants");
const DisentombBase = require("../setM13/Disentomb");

class Disentomb extends DisentombBase {
  constructor (game) {
    super(game, "Disentomb", "Magic 2010", "M10");
  }
}

module.exports = Disentomb;
