"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelReactor extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Reactor", "Darksteel", "DST");
  }
}

module.exports = DarksteelReactor;
