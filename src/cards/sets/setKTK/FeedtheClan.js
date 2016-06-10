"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeedtheClan extends UnimplementedCard {
  constructor (game) {
    super(game, "Feed the Clan", "Khans of Tarkir", "KTK");
  }
}

module.exports = FeedtheClan;
