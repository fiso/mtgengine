"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkofSakiko extends Card {
  constructor(game) {
    super(game, "Mark of Sakiko", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MarkofSakiko;
