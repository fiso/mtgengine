"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cloudseeder extends Card {
  constructor(game) {
    super(game, "Cloudseeder", "Future Sight", "FUT");
  }
}

module.exports = Cloudseeder;
