"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JumboImp extends Card {
  constructor(game) {
    super(game, "Jumbo Imp", "Unglued", "UGL");
  }
}

module.exports = JumboImp;
