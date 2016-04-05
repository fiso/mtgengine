"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrawWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Craw Wurm", "Collector's Edition", "CED");
  }
}

module.exports = CrawWurm;
