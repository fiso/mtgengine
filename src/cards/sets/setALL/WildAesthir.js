"use strict";
const Constants = require ("../../../Constants");
const WildAesthirBase = require("../setME4/WildAesthir");

class WildAesthir extends WildAesthirBase {
  constructor (game) {
    super(game, "Wild Aesthir", "Alliances", "ALL");
  }
}

module.exports = WildAesthir;
