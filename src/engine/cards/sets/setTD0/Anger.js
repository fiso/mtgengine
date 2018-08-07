"use strict";
const Constants = require ("../../../Constants");
const AngerBase = require("../setCMA/Anger");

class Anger extends AngerBase {
  constructor (game) {
    super(game, "Anger", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Anger;
