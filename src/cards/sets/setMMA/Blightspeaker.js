"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blightspeaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Blightspeaker", "Modern Masters", "MMA");
  }
}

module.exports = Blightspeaker;
