"use strict";
const Constants = require ("../../../Constants");
const CrawWurmBase = require("../setCED/CrawWurm");

class CrawWurm extends CrawWurmBase {
  constructor(game) {
    super(game, "Craw Wurm", "International Collector's Edition", "CEI");
  }
}

module.exports = CrawWurm;
