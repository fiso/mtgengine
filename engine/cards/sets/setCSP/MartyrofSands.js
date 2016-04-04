"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartyrofSands extends Card {
  constructor(game) {
    super(game, "Martyr of Sands", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofSands;
