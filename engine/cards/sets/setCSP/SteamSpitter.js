"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteamSpitter extends Card {
  constructor(game) {
    super(game, "Steam Spitter", "Coldsnap", "CSP");
  }
}

module.exports = SteamSpitter;
