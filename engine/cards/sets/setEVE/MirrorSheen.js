"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirrorSheen extends Card {
  constructor(game) {
    super(game, "Mirror Sheen", "Eventide", "EVE");
  }
}

module.exports = MirrorSheen;
