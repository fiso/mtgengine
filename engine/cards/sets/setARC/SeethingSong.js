"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeethingSong extends UnimplementedCard {
  constructor(game) {
    super(game, "Seething Song", "Archenemy", "ARC");
  }
}

module.exports = SeethingSong;
