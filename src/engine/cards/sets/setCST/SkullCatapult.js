"use strict";
const Constants = require ("../../../Constants");
const SkullCatapultBase = require("../setME2/SkullCatapult");

class SkullCatapult extends SkullCatapultBase {
  constructor (game) {
    super(game, "Skull Catapult", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = SkullCatapult;
