"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeedtheClan extends Card {
  constructor(game) {
    super(game, "Feed the Clan", "Khans of Tarkir", "KTK");
  }
}

module.exports = FeedtheClan;
