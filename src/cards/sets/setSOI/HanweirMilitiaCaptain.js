"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HanweirMilitiaCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Hanweir Militia Captain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HanweirMilitiaCaptain;
