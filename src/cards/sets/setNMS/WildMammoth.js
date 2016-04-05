"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildMammoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Mammoth", "Nemesis", "NMS");
  }
}

module.exports = WildMammoth;
