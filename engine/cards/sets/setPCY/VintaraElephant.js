"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VintaraElephant extends UnimplementedCard {
  constructor(game) {
    super(game, "Vintara Elephant", "Prophecy", "PCY");
  }
}

module.exports = VintaraElephant;
