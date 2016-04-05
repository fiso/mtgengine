"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidSnitch extends UnimplementedCard {
  constructor(game) {
    super(game, "Cephalid Snitch", "Torment", "TOR");
  }
}

module.exports = CephalidSnitch;
