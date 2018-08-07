"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanMessenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Messenger", "Magic Origins", "ORI");
  }
}

module.exports = SylvanMessenger;
