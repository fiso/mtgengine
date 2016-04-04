"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrawWurmBase = require("../setCED/CrawWurm.js");

class CrawWurm extends CrawWurmBase {
  constructor(game) {
    super(game, "Craw Wurm", "International Collector's Edition", "CEI");
  }
}

module.exports = CrawWurm;
