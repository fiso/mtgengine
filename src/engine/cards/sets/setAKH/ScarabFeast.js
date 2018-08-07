"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScarabFeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Scarab Feast", "Amonkhet", "AKH");
  }
}

module.exports = ScarabFeast;
