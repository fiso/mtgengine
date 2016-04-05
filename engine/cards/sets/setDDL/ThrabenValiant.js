"use strict";
const Constants = require ("../../../Constants");
const ThrabenValiantBase = require("../setAVR/ThrabenValiant");

class ThrabenValiant extends ThrabenValiantBase {
  constructor(game) {
    super(game, "Thraben Valiant", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ThrabenValiant;
