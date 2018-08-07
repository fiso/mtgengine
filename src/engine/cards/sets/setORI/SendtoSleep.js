"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SendtoSleep extends UnimplementedCard {
  constructor (game) {
    super(game, "Send to Sleep", "Magic Origins", "ORI");
  }
}

module.exports = SendtoSleep;
