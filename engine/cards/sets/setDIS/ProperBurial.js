"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProperBurial extends UnimplementedCard {
  constructor(game) {
    super(game, "Proper Burial", "Dissension", "DIS");
  }
}

module.exports = ProperBurial;
