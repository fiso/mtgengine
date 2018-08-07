"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HideSeek extends UnimplementedCard {
  constructor (game) {
    super(game, "Hide // Seek", "Dissension", "DIS");
  }
}

module.exports = HideSeek;
