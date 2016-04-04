"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeatherbackBaloth extends Card {
  constructor(game) {
    super(game, "Leatherback Baloth", "Worldwake", "WWK");
  }
}

module.exports = LeatherbackBaloth;
