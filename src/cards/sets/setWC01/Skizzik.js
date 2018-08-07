"use strict";
const Constants = require ("../../../Constants");
const SkizzikBase = require("../setDOM/Skizzik");

class Skizzik extends SkizzikBase {
  constructor (game) {
    super(game, "Skizzik", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Skizzik;
