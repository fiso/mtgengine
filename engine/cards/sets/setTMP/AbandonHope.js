"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbandonHope extends UnimplementedCard {
  constructor(game) {
    super(game, "Abandon Hope", "Tempest", "TMP");
  }
}

module.exports = AbandonHope;
