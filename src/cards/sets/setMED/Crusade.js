"use strict";
const Constants = require ("../../../Constants");
const CrusadeBase = require("../set6ED/Crusade");

class Crusade extends CrusadeBase {
  constructor (game) {
    super(game, "Crusade", "Masters Edition", "MED");
  }
}

module.exports = Crusade;
