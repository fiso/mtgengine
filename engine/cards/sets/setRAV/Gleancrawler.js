"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GleancrawlerBase = require("../setDDJ/Gleancrawler.js");

class Gleancrawler extends GleancrawlerBase {
  constructor(game) {
    super(game, "Gleancrawler", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Gleancrawler;
