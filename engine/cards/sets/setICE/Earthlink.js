"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Earthlink extends Card {
  constructor(game) {
    super(game, "Earthlink", "Ice Age", "ICE");
  }
}

module.exports = Earthlink;
