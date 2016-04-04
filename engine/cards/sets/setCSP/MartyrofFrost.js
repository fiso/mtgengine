"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartyrofFrost extends Card {
  constructor(game) {
    super(game, "Martyr of Frost", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofFrost;
