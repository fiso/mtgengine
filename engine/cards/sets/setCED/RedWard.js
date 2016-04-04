"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RedWard extends Card {
  constructor(game) {
    super(game, "Red Ward", "Collector's Edition", "CED");
  }
}

module.exports = RedWard;
