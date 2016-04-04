"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrawWurmBase = require("../setCED/CrawWurm.js");

class CrawWurm extends CrawWurmBase {
  constructor(game) {
    super(game, "Craw Wurm", "Fifth Edition", "5ED");
  }
}

module.exports = CrawWurm;
