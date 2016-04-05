"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sisay extends UnimplementedCard {
  constructor(game) {
    super(game, "Sisay", "Vanguard", "VAN");
  }
}

module.exports = Sisay;
