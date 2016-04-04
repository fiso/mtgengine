"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoxiousToad extends Card {
  constructor(game) {
    super(game, "Noxious Toad", "Portal", "POR");
  }
}

module.exports = NoxiousToad;
