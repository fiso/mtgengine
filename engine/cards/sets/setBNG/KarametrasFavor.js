"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarametrasFavor extends Card {
  constructor(game) {
    super(game, "Karametra's Favor", "Born of the Gods", "BNG");
  }
}

module.exports = KarametrasFavor;
