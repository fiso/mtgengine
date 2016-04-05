"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessReveler extends UnimplementedCard {
  constructor(game) {
    super(game, "Reckless Reveler", "Born of the Gods", "BNG");
  }
}

module.exports = RecklessReveler;
