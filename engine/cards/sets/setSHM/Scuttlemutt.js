"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scuttlemutt extends Card {
  constructor(game) {
    super(game, "Scuttlemutt", "Shadowmoor", "SHM");
  }
}

module.exports = Scuttlemutt;
