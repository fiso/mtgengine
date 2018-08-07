"use strict";
const Constants = require ("../../../Constants");
const AnnulBase = require("../setTHS/Annul");

class Annul extends AnnulBase {
  constructor (game) {
    super(game, "Annul", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Annul;
