"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaalfeldTwins extends UnimplementedCard {
  constructor (game) {
    super(game, "Maalfeld Twins", "Avacyn Restored", "AVR");
  }
}

module.exports = MaalfeldTwins;
