"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ichorid extends Card {
  constructor(game) {
    super(game, "Ichorid", "Torment", "TOR");
  }
}

module.exports = Ichorid;
