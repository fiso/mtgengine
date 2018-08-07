"use strict";
const Constants = require ("../../../Constants");
const RecoupBase = require("../setDDK/Recoup");

class Recoup extends RecoupBase {
  constructor (game) {
    super(game, "Recoup", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Recoup;
