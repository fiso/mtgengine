"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BileUrchin extends Card {
  constructor(game) {
    super(game, "Bile Urchin", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BileUrchin;
