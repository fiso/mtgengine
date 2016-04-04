"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TotemSpeaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Totem Speaker", "Legions", "LGN");
  }
}

module.exports = TotemSpeaker;
