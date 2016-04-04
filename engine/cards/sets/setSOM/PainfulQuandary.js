"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainfulQuandary extends UnimplementedCard {
  constructor(game) {
    super(game, "Painful Quandary", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PainfulQuandary;
