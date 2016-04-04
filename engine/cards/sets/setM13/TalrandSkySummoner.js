"use strict";
const Constants = require ("../../../Constants");
const TalrandSkySummonerBase = require("../setC15/TalrandSkySummoner");

class TalrandSkySummoner extends TalrandSkySummonerBase {
  constructor(game) {
    super(game, "Talrand, Sky Summoner", "Magic 2013", "M13");
  }
}

module.exports = TalrandSkySummoner;
