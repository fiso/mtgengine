"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndomitableWill extends UnimplementedCard {
  constructor(game) {
    super(game, "Indomitable Will", "Champions of Kamigawa", "CHK");
  }
}

module.exports = IndomitableWill;
