"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoldgrafScavenger extends Card {
  constructor(game) {
    super(game, "Moldgraf Scavenger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MoldgrafScavenger;
