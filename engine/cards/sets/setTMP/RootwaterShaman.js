"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootwaterShaman extends Card {
  constructor(game) {
    super(game, "Rootwater Shaman", "Tempest", "TMP");
  }
}

module.exports = RootwaterShaman;
