"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FiligreeAngel extends Card {
  constructor(game) {
    super(game, "Filigree Angel", "Alara Reborn", "ARB");
  }
}

module.exports = FiligreeAngel;
