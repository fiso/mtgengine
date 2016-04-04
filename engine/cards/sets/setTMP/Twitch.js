"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Twitch extends Card {
  constructor(game) {
    super(game, "Twitch", "Tempest", "TMP");
  }
}

module.exports = Twitch;
