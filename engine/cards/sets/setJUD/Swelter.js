"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Swelter extends Card {
  constructor(game) {
    super(game, "Swelter", "Judgment", "JUD");
  }
}

module.exports = Swelter;
