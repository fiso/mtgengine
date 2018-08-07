"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WateryGrave extends UnimplementedCard {
  constructor (game) {
    super(game, "Watery Grave", "Zendikar Expeditions", "EXP");
  }
}

module.exports = WateryGrave;
