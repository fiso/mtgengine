"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThrabenValiantBase = require("../setAVR/ThrabenValiant.js");

class ThrabenValiant extends ThrabenValiantBase {
  constructor(game) {
    super(game, "Thraben Valiant", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ThrabenValiant;
