"use strict";
const Constants = require ("../../../Constants");
const AngerBase = require("../setCMA/Anger");

class Anger extends AngerBase {
  constructor (game) {
    super(game, "Anger", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Anger;
