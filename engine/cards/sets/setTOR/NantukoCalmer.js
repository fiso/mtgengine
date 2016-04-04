"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NantukoCalmer extends Card {
  constructor(game) {
    super(game, "Nantuko Calmer", "Torment", "TOR");
  }
}

module.exports = NantukoCalmer;
