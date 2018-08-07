"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MessengerJays extends UnimplementedCard {
  constructor (game) {
    super(game, "Messenger Jays", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = MessengerJays;
