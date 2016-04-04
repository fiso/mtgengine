"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TinStreetHooligan extends Card {
  constructor(game) {
    super(game, "Tin Street Hooligan", "Guildpact", "GPT");
  }
}

module.exports = TinStreetHooligan;
