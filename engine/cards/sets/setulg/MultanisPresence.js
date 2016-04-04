"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MultanisPresence extends UnimplementedCard {
  constructor(game) {
    super(game, "Multani's Presence", "Urza's Legacy", "ULG");
  }
}

module.exports = MultanisPresence;
