"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SternJudge extends UnimplementedCard {
  constructor(game) {
    super(game, "Stern Judge", "Torment", "TOR");
  }
}

module.exports = SternJudge;
