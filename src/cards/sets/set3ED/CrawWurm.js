"use strict";
const Constants = require ("../../../Constants");
const CrawWurmBase = require("../setCED/CrawWurm");

class CrawWurm extends CrawWurmBase {
  constructor (game) {
    super(game, "Craw Wurm", "Revised Edition", "3ED");
  }
}

module.exports = CrawWurm;
