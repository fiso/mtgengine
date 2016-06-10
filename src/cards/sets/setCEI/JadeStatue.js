"use strict";
const Constants = require ("../../../Constants");
const JadeStatueBase = require("../setCED/JadeStatue");

class JadeStatue extends JadeStatueBase {
  constructor (game) {
    super(game, "Jade Statue", "International Collector's Edition", "CEI");
  }
}

module.exports = JadeStatue;
