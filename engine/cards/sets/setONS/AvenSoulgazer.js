"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenSoulgazer extends Card {
  constructor(game) {
    super(game, "Aven Soulgazer", "Onslaught", "ONS");
  }
}

module.exports = AvenSoulgazer;
