"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarMammoth extends UnimplementedCard {
  constructor (game) {
    super(game, "War Mammoth", "Masters Edition IV", "ME4");
  }
}

module.exports = WarMammoth;
