"use strict";
const Constants = require ("../../../Constants");
const KrosanTuskerBase = require("../setARC/KrosanTusker");

class KrosanTusker extends KrosanTuskerBase {
  constructor(game) {
    super(game, "Krosan Tusker", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = KrosanTusker;
