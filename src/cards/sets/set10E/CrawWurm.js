"use strict";
const Constants = require ("../../../Constants");
const CrawWurmBase = require("../setCED/CrawWurm");

class CrawWurm extends CrawWurmBase {
  constructor (game) {
    super(game, "Craw Wurm", "Tenth Edition", "10E");
  }
}

module.exports = CrawWurm;
