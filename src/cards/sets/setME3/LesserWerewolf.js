"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LesserWerewolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Lesser Werewolf", "Masters Edition III", "ME3");
  }
}

module.exports = LesserWerewolf;
