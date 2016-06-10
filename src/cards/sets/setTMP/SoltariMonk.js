"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariMonk extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Monk", "Tempest", "TMP");
  }
}

module.exports = SoltariMonk;
