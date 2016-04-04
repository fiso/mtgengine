"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VintaraSnapper extends Card {
  constructor(game) {
    super(game, "Vintara Snapper", "Prophecy", "PCY");
  }
}

module.exports = VintaraSnapper;
