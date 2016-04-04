"use strict";
const Constants = require ("../../../Constants");
const WildAesthirBase = require("../setALL/WildAesthir");

class WildAesthir extends WildAesthirBase {
  constructor(game) {
    super(game, "Wild Aesthir", "Masters Edition IV", "ME4");
  }
}

module.exports = WildAesthir;
