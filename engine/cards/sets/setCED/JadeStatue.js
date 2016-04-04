"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JadeStatue extends Card {
  constructor(game) {
    super(game, "Jade Statue", "Collector's Edition", "CED");
  }
}

module.exports = JadeStatue;
