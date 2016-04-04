"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Norritt extends Card {
  constructor(game) {
    super(game, "Norritt", "Ice Age", "ICE");
  }
}

module.exports = Norritt;
