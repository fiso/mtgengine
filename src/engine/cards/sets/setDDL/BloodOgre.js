"use strict";
const Constants = require ("../../../Constants");
const BloodOgreBase = require("../setE01/BloodOgre");

class BloodOgre extends BloodOgreBase {
  constructor (game) {
    super(game, "Blood Ogre", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BloodOgre;
