"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KingCheetah extends UnimplementedCard {
  constructor (game) {
    super(game, "King Cheetah", "Multiverse Gift Box", "MGB");
  }
}

module.exports = KingCheetah;
