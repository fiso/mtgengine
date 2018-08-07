"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvySeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivy Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = IvySeer;
