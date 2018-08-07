"use strict";
const Constants = require ("../../../Constants");
const TwitchBase = require("../setTPR/Twitch");

class Twitch extends TwitchBase {
  constructor (game) {
    super(game, "Twitch", "Tempest", "TMP");
  }
}

module.exports = Twitch;
