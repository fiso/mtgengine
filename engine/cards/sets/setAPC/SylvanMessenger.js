"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanMessenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Sylvan Messenger", "Apocalypse", "APC");
  }
}

module.exports = SylvanMessenger;
