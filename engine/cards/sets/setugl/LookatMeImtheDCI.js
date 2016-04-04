"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LookatMeImtheDCI extends Card {
  constructor(game) {
    super(game, "Look at Me, I'm the DCI", "Unglued", "UGL");
  }
}

module.exports = LookatMeImtheDCI;
