"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravenAbomination extends UnimplementedCard {
  constructor (game) {
    super(game, "Graven Abomination", "Hour of Devastation", "HOU");
  }
}

module.exports = GravenAbomination;
