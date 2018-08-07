"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamSpitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Steam Spitter", "Coldsnap", "CSP");
  }
}

module.exports = SteamSpitter;
