"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderousMight extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunderous Might", "Born of the Gods", "BNG");
  }
}

module.exports = ThunderousMight;
