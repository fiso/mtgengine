"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DictateofKruphix extends Card {
  constructor(game) {
    super(game, "Dictate of Kruphix", "Journey into Nyx", "JOU");
  }
}

module.exports = DictateofKruphix;
