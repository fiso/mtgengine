"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GibberingKami extends Card {
  constructor(game) {
    super(game, "Gibbering Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GibberingKami;
