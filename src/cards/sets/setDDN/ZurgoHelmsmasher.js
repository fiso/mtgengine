"use strict";
const Constants = require ("../../../Constants");
const ZurgoHelmsmasherBase = require("../setKTK/ZurgoHelmsmasher");

class ZurgoHelmsmasher extends ZurgoHelmsmasherBase {
  constructor (game) {
    super(game, "Zurgo Helmsmasher", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ZurgoHelmsmasher;
