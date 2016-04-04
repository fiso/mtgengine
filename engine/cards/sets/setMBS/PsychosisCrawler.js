"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PsychosisCrawlerBase = require("../setC15/PsychosisCrawler.js");

class PsychosisCrawler extends PsychosisCrawlerBase {
  constructor(game) {
    super(game, "Psychosis Crawler", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PsychosisCrawler;
