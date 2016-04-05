"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScaldingDevil extends UnimplementedCard {
  constructor(game) {
    super(game, "Scalding Devil", "Avacyn Restored", "AVR");
  }
}

module.exports = ScaldingDevil;
