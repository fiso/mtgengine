"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TonicPeddler extends Card {
  constructor(game) {
    super(game, "Tonic Peddler", "Mercadian Masques", "MMQ");
  }
}

module.exports = TonicPeddler;
