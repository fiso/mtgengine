"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NettlingImp extends Card {
  constructor(game) {
    super(game, "Nettling Imp", "Collector's Edition", "CED");
  }
}

module.exports = NettlingImp;
