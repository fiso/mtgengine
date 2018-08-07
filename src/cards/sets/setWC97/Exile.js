"use strict";
const Constants = require ("../../../Constants");
const ExileBase = require("../setVMA/Exile");

class Exile extends ExileBase {
  constructor (game) {
    super(game, "Exile", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Exile;
