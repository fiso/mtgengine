"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvatarofDiscordBase = require("../setARC/AvatarofDiscord.js");

class AvatarofDiscord extends AvatarofDiscordBase {
  constructor(game) {
    super(game, "Avatar of Discord", "Dissension", "DIS");
  }
}

module.exports = AvatarofDiscord;
