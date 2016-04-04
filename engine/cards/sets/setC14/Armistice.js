"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Armistice extends Card {
  constructor(game) {
    super(game, "Armistice", "Commander 2014", "C14");
  }
}

module.exports = Armistice;
