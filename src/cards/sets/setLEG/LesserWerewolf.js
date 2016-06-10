"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LesserWerewolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Lesser Werewolf", "Legends", "LEG");
  }
}

module.exports = LesserWerewolf;
