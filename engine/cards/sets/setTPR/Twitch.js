"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwitchBase = require("../setTMP/Twitch.js");

class Twitch extends TwitchBase {
  constructor(game) {
    super(game, "Twitch", "Tempest Remastered", "TPR");
  }
}

module.exports = Twitch;
