"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JukaiMessenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Jukai Messenger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JukaiMessenger;
