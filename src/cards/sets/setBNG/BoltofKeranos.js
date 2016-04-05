"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoltofKeranos extends UnimplementedCard {
  constructor(game) {
    super(game, "Bolt of Keranos", "Born of the Gods", "BNG");
  }
}

module.exports = BoltofKeranos;
