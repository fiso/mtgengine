"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Headhunter extends Card {
  constructor(game) {
    super(game, "Headhunter", "Onslaught", "ONS");
  }
}

module.exports = Headhunter;
