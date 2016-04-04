"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherWell extends UnimplementedCard {
  constructor(game) {
    super(game, "Ether Well", "Mirage", "MIR");
  }
}

module.exports = EtherWell;
