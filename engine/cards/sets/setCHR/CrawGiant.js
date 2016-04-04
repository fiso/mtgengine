"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrawGiant extends Card {
  constructor(game) {
    super(game, "Craw Giant", "Chronicles", "CHR");
  }
}

module.exports = CrawGiant;
