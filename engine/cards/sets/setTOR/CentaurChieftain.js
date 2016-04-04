"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurChieftain extends Card {
  constructor(game) {
    super(game, "Centaur Chieftain", "Torment", "TOR");
  }
}

module.exports = CentaurChieftain;
