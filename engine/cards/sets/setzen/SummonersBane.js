"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SummonersBaneBase = require("../setDDM/SummonersBane.js");

class SummonersBane extends SummonersBaneBase {
  constructor(game) {
    super(game, "Summoner's Bane", "Zendikar", "ZEN");
  }
}

module.exports = SummonersBane;
