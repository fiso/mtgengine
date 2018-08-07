"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setJVC/Incinerate");

class Incinerate extends IncinerateBase {
  constructor (game) {
    super(game, "Incinerate", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Incinerate;
