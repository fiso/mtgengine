"use strict";
const Constants = require ("../../../Constants");
const TwitchBase = require("../setTMP/Twitch");

class Twitch extends TwitchBase {
  constructor(game) {
    super(game, "Twitch", "Tempest Remastered", "TPR");
  }
}

module.exports = Twitch;
