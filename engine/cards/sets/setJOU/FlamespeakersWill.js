"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamespeakersWill extends Card {
  constructor(game) {
    super(game, "Flamespeaker's Will", "Journey into Nyx", "JOU");
  }
}

module.exports = FlamespeakersWill;
