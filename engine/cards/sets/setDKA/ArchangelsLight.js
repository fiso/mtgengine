"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArchangelsLight extends Card {
  constructor(game) {
    super(game, "Archangel's Light", "Dark Ascension", "DKA");
  }
}

module.exports = ArchangelsLight;
