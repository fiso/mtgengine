"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartialCoup extends Card {
  constructor(game) {
    super(game, "Martial Coup", "Commander 2014", "C14");
  }
}

module.exports = MartialCoup;
