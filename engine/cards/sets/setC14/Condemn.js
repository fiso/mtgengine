"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Condemn extends Card {
  constructor(game) {
    super(game, "Condemn", "Commander 2014", "C14");
  }
}

module.exports = Condemn;
