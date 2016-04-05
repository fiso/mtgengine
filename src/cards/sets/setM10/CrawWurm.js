"use strict";
const Constants = require ("../../../Constants");
const CrawWurmBase = require("../setCED/CrawWurm");

class CrawWurm extends CrawWurmBase {
  constructor(game) {
    super(game, "Craw Wurm", "Magic 2010", "M10");
  }
}

module.exports = CrawWurm;
