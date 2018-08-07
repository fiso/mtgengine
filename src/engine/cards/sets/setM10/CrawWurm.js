"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrawWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Craw Wurm", "Magic 2010", "M10");
  }
}

module.exports = CrawWurm;
