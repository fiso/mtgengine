"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reweave extends Card {
  constructor(game) {
    super(game, "Reweave", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Reweave;
