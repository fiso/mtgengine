"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrazedFirecat extends Card {
  constructor(game) {
    super(game, "Crazed Firecat", "Torment", "TOR");
  }
}

module.exports = CrazedFirecat;
