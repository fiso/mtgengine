"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JadeStatueBase = require("../setCED/JadeStatue.js");

class JadeStatue extends JadeStatueBase {
  constructor(game) {
    super(game, "Jade Statue", "Unlimited Edition", "2ED");
  }
}

module.exports = JadeStatue;
