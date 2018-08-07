"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamespeakersWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Flamespeaker's Will", "Journey into Nyx", "JOU");
  }
}

module.exports = FlamespeakersWill;
