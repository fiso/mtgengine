"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonStyleTwinsBase = require("../setKTK/DragonStyleTwins.js");

class DragonStyleTwins extends DragonStyleTwinsBase {
  constructor(game) {
    super(game, "Dragon-Style Twins", "Prerelease Events", "pPRE");
  }
}

module.exports = DragonStyleTwins;
