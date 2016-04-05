"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeralfsMessenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Geralf's Messenger", "Dark Ascension", "DKA");
  }
}

module.exports = GeralfsMessenger;
