"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cagemail extends Card {
  constructor(game) {
    super(game, "Cagemail", "Judgment", "JUD");
  }
}

module.exports = Cagemail;
