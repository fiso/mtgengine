"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoChamber extends UnimplementedCard {
  constructor(game) {
    super(game, "Echo Chamber", "Tempest", "TMP");
  }
}

module.exports = EchoChamber;
