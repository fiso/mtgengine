"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootwaterDiver extends Card {
  constructor(game) {
    super(game, "Rootwater Diver", "Tempest", "TMP");
  }
}

module.exports = RootwaterDiver;
