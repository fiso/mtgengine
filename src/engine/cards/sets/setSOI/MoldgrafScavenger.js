"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoldgrafScavenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Moldgraf Scavenger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MoldgrafScavenger;
