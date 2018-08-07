"use strict";
const Constants = require ("../../../Constants");
const KjeldoranOutpostBase = require("../setVMA/KjeldoranOutpost");

class KjeldoranOutpost extends KjeldoranOutpostBase {
  constructor (game) {
    super(game, "Kjeldoran Outpost", "World Championship Decks 1997", "WC97");
  }
}

module.exports = KjeldoranOutpost;
