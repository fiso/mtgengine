"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PoxBase = require("../set5ED/Pox.js");

class Pox extends PoxBase {
  constructor(game) {
    super(game, "Pox", "Ice Age", "ICE");
  }
}

module.exports = Pox;
