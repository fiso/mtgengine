"use strict";
const Constants = require ("../../../Constants");
const TwitchBase = require("../setTMP/Twitch");

class Twitch extends TwitchBase {
  constructor(game) {
    super(game, "Twitch", "Worldwake", "WWK");
  }
}

module.exports = Twitch;
