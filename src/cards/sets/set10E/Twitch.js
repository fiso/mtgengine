"use strict";
const Constants = require ("../../../Constants");
const TwitchBase = require("../setTMP/Twitch");

class Twitch extends TwitchBase {
  constructor (game) {
    super(game, "Twitch", "Tenth Edition", "10E");
  }
}

module.exports = Twitch;
