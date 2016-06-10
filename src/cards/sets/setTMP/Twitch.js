"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Twitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Twitch", "Tempest", "TMP");
  }
}

module.exports = Twitch;
