"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Formation extends Card {
  constructor(game) {
    super(game, "Formation", "Ice Age", "ICE");
  }
}

module.exports = Formation;
