"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamscapeArtist extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreamscape Artist", "Planar Chaos", "PLC");
  }
}

module.exports = DreamscapeArtist;
