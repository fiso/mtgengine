"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamscapeArtist extends Card {
  constructor(game) {
    super(game, "Dreamscape Artist", "Planar Chaos", "PLC");
  }
}

module.exports = DreamscapeArtist;
