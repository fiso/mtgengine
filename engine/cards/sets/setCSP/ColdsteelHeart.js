"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ColdsteelHeart extends Card {
  constructor(game) {
    super(game, "Coldsteel Heart", "Coldsnap", "CSP");
  }
}

module.exports = ColdsteelHeart;
