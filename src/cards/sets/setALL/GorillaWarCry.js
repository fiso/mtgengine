"use strict";
const Constants = require ("../../../Constants");
const GorillaWarCryBase = require("../setME4/GorillaWarCry");

class GorillaWarCry extends GorillaWarCryBase {
  constructor (game) {
    super(game, "Gorilla War Cry", "Alliances", "ALL");
  }
}

module.exports = GorillaWarCry;
