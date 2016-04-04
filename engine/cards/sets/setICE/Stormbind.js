"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stormbind extends Card {
  constructor(game) {
    super(game, "Stormbind", "Ice Age", "ICE");
  }
}

module.exports = Stormbind;
