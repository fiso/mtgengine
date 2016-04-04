"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorUniverse extends Card {
  constructor(game) {
    super(game, "Mirror Universe", "Legends", "LEG");
  }
}

module.exports = MirrorUniverse;
