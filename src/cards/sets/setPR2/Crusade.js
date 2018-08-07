"use strict";
const Constants = require ("../../../Constants");
const CrusadeBase = require("../setDDF/Crusade");

class Crusade extends CrusadeBase {
  constructor (game) {
    super(game, "Crusade", "Magic Player Rewards 2002", "PR2");
  }
}

module.exports = Crusade;
