"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JadeStatueBase = require("../setCED/JadeStatue.js");

class JadeStatue extends JadeStatueBase {
  constructor(game) {
    super(game, "Jade Statue", "Ninth Edition", "9ED");
  }
}

module.exports = JadeStatue;
