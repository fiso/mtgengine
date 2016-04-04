"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TivadarsCrusade extends Card {
  constructor(game) {
    super(game, "Tivadar's Crusade", "Masters Edition", "MED");
  }
}

module.exports = TivadarsCrusade;
