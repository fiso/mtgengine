"use strict";
const Constants = require ("../../../Constants");
const CrusadeBase = require("../setDDF/Crusade");

class Crusade extends CrusadeBase {
  constructor (game) {
    super(game, "Crusade", "Limited Edition Beta", "LEB");
  }
}

module.exports = Crusade;
