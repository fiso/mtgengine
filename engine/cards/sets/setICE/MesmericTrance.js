"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MesmericTrance extends Card {
  constructor(game) {
    super(game, "Mesmeric Trance", "Ice Age", "ICE");
  }
}

module.exports = MesmericTrance;
