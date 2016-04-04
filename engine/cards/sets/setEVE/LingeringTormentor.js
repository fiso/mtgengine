"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LingeringTormentor extends Card {
  constructor(game) {
    super(game, "Lingering Tormentor", "Eventide", "EVE");
  }
}

module.exports = LingeringTormentor;
