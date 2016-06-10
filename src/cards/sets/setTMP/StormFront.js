"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormFront extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Front", "Tempest", "TMP");
  }
}

module.exports = StormFront;
