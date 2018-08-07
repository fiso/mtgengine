"use strict";
const Constants = require ("../../../Constants");
const CataclysmBase = require("../setTPR/Cataclysm");

class Cataclysm extends CataclysmBase {
  constructor (game) {
    super(game, "Cataclysm", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Cataclysm;
