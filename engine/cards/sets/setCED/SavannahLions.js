"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavannahLions extends Card {
  constructor(game) {
    super(game, "Savannah Lions", "Collector's Edition", "CED");
  }
}

module.exports = SavannahLions;
