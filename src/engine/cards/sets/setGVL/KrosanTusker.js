"use strict";
const Constants = require ("../../../Constants");
const KrosanTuskerBase = require("../setDDU/KrosanTusker");

class KrosanTusker extends KrosanTuskerBase {
  constructor (game) {
    super(game, "Krosan Tusker", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = KrosanTusker;
