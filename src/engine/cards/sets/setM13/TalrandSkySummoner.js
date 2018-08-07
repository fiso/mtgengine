"use strict";
const Constants = require ("../../../Constants");
const TalrandSkySummonerBase = require("../setDDS/TalrandSkySummoner");

class TalrandSkySummoner extends TalrandSkySummonerBase {
  constructor (game) {
    super(game, "Talrand, Sky Summoner", "Magic 2013", "M13");
  }
}

module.exports = TalrandSkySummoner;
