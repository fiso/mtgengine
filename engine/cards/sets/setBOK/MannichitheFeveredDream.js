"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MannichitheFeveredDream extends Card {
  constructor(game) {
    super(game, "Mannichi, the Fevered Dream", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MannichitheFeveredDream;
