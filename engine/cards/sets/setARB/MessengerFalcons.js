"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MessengerFalcons extends UnimplementedCard {
  constructor(game) {
    super(game, "Messenger Falcons", "Alara Reborn", "ARB");
  }
}

module.exports = MessengerFalcons;
