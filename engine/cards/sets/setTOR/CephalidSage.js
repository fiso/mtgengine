"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidSage extends UnimplementedCard {
  constructor(game) {
    super(game, "Cephalid Sage", "Torment", "TOR");
  }
}

module.exports = CephalidSage;
