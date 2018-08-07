"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Avenger", "Magic 2013", "M13");
  }
}

module.exports = SerraAvenger;
