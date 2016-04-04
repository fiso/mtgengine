"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrosanTuskerBase = require("../setARC/KrosanTusker.js");

class KrosanTusker extends KrosanTuskerBase {
  constructor(game) {
    super(game, "Krosan Tusker", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = KrosanTusker;
