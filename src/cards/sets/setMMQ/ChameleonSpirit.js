"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChameleonSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Chameleon Spirit", "Mercadian Masques", "MMQ");
  }
}

module.exports = ChameleonSpirit;
