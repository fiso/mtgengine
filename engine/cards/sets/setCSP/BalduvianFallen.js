"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianFallen extends Card {
  constructor(game) {
    super(game, "Balduvian Fallen", "Coldsnap", "CSP");
  }
}

module.exports = BalduvianFallen;
