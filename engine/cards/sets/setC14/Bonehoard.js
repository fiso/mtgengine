"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bonehoard extends Card {
  constructor(game) {
    super(game, "Bonehoard", "Commander 2014", "C14");
  }
}

module.exports = Bonehoard;
