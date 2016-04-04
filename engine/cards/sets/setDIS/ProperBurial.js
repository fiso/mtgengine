"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProperBurial extends Card {
  constructor(game) {
    super(game, "Proper Burial", "Dissension", "DIS");
  }
}

module.exports = ProperBurial;
