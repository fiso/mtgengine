"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptCourtOfficial extends UnimplementedCard {
  constructor(game) {
    super(game, "Corrupt Court Official", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CorruptCourtOfficial;
