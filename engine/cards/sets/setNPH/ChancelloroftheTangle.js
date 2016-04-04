"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChancelloroftheTangle extends Card {
  constructor(game) {
    super(game, "Chancellor of the Tangle", "New Phyrexia", "NPH");
  }
}

module.exports = ChancelloroftheTangle;
