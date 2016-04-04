"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogImp extends Card {
  constructor(game) {
    super(game, "Bog Imp", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BogImp;
