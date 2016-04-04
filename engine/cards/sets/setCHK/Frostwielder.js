"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Frostwielder extends Card {
  constructor(game) {
    super(game, "Frostwielder", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Frostwielder;
