"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrivateResearch extends UnimplementedCard {
  constructor(game) {
    super(game, "Private Research", "Urza's Destiny", "UDS");
  }
}

module.exports = PrivateResearch;
