"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindwrackLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindwrack Liege", "Eventide", "EVE");
  }
}

module.exports = MindwrackLiege;
