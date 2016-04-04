"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartlessHidetsugu extends Card {
  constructor(game) {
    super(game, "Heartless Hidetsugu", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HeartlessHidetsugu;
