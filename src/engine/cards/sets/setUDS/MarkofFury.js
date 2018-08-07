"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkofFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Mark of Fury", "Urza's Destiny", "UDS");
  }
}

module.exports = MarkofFury;
