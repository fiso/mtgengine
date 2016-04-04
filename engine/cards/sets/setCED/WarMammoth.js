"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarMammoth extends Card {
  constructor(game) {
    super(game, "War Mammoth", "Collector's Edition", "CED");
  }
}

module.exports = WarMammoth;
