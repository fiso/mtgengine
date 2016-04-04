"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JaggedPoppet extends Card {
  constructor(game) {
    super(game, "Jagged Poppet", "Dissension", "DIS");
  }
}

module.exports = JaggedPoppet;
