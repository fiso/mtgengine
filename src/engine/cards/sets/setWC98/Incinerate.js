"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setJVC/Incinerate");

class Incinerate extends IncinerateBase {
  constructor (game) {
    super(game, "Incinerate", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Incinerate;
