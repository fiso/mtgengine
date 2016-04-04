"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrawWurm extends Card {
  constructor(game) {
    super(game, "Craw Wurm", "Collector's Edition", "CED");
  }
}

module.exports = CrawWurm;
