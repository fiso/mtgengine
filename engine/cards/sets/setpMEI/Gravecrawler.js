"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravecrawlerBase = require("../setDKA/Gravecrawler.js");

class Gravecrawler extends GravecrawlerBase {
  constructor(game) {
    super(game, "Gravecrawler", "Media Inserts", "pMEI");
  }
}

module.exports = Gravecrawler;
