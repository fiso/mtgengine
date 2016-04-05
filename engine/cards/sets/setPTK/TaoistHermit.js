"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaoistHermit extends UnimplementedCard {
  constructor(game) {
    super(game, "Taoist Hermit", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TaoistHermit;
