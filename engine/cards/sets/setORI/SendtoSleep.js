"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SendtoSleep extends Card {
  constructor(game) {
    super(game, "Send to Sleep", "Magic Origins", "ORI");
  }
}

module.exports = SendtoSleep;
