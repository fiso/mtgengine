"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NagaoBoundbyHonor extends UnimplementedCard {
  constructor(game) {
    super(game, "Nagao, Bound by Honor", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NagaoBoundbyHonor;
