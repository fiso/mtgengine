"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NirkanaRevenant extends Card {
  constructor(game) {
    super(game, "Nirkana Revenant", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NirkanaRevenant;
