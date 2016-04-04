"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrimsPrayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Orim's Prayer", "Tempest", "TMP");
  }
}

module.exports = OrimsPrayer;
