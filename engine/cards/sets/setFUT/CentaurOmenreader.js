"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurOmenreader extends Card {
  constructor(game) {
    super(game, "Centaur Omenreader", "Future Sight", "FUT");
  }
}

module.exports = CentaurOmenreader;
