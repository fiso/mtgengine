"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkoftheOni extends Card {
  constructor(game) {
    super(game, "Mark of the Oni", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MarkoftheOni;
