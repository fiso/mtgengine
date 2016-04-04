"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SetonsScout extends Card {
  constructor(game) {
    super(game, "Seton's Scout", "Torment", "TOR");
  }
}

module.exports = SetonsScout;
