"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptedZendikon extends UnimplementedCard {
  constructor(game) {
    super(game, "Corrupted Zendikon", "Worldwake", "WWK");
  }
}

module.exports = CorruptedZendikon;
