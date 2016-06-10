"use strict";
const Constants = require ("../../../Constants");
const DisentombBase = require("../setM10/Disentomb");

class Disentomb extends DisentombBase {
  constructor (game) {
    super(game, "Disentomb", "Magic 2011", "M11");
  }
}

module.exports = Disentomb;
