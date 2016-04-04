"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FuneralMarch extends Card {
  constructor(game) {
    super(game, "Funeral March", "Fifth Edition", "5ED");
  }
}

module.exports = FuneralMarch;
