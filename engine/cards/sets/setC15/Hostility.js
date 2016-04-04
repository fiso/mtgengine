"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hostility extends Card {
  constructor(game) {
    super(game, "Hostility", "Commander 2015", "C15");
  }
}

module.exports = Hostility;
