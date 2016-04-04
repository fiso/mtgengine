"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FiddleheadKami extends Card {
  constructor(game) {
    super(game, "Fiddlehead Kami", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = FiddleheadKami;
