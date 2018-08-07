"use strict";
const Constants = require ("../../../Constants");
const VisaratheDreadfulBase = require("../setEMA/VisaratheDreadful");

class VisaratheDreadful extends VisaratheDreadfulBase {
  constructor (game) {
    super(game, "Visara the Dreadful", "World Championship Decks 2003", "WC03");
  }
}

module.exports = VisaratheDreadful;
