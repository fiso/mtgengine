"use strict";
const Constants = require ("../../../Constants");
const RecollectBase = require("../setM19/Recollect");

class Recollect extends RecollectBase {
  constructor (game) {
    super(game, "Recollect", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Recollect;
