"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalltoServe extends Card {
  constructor(game) {
    super(game, "Call to Serve", "Avacyn Restored", "AVR");
  }
}

module.exports = CalltoServe;
