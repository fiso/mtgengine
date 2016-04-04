"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EtherWell extends Card {
  constructor(game) {
    super(game, "Ether Well", "Mirage", "MIR");
  }
}

module.exports = EtherWell;
