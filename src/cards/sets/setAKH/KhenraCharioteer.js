"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhenraCharioteer extends UnimplementedCard {
  constructor (game) {
    super(game, "Khenra Charioteer", "Amonkhet", "AKH");
  }
}

module.exports = KhenraCharioteer;
