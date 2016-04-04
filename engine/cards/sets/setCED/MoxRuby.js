"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoxRuby extends Card {
  constructor(game) {
    super(game, "Mox Ruby", "Collector's Edition", "CED");
  }
}

module.exports = MoxRuby;
