"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelBargain extends UnimplementedCard {
  constructor(game) {
    super(game, "Cruel Bargain", "Portal", "POR");
  }
}

module.exports = CruelBargain;
