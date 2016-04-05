"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessScream extends UnimplementedCard {
  constructor(game) {
    super(game, "Endless Scream", "Tempest", "TMP");
  }
}

module.exports = EndlessScream;
