"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandsofBinding extends UnimplementedCard {
  constructor(game) {
    super(game, "Hands of Binding", "Gatecrash", "GTC");
  }
}

module.exports = HandsofBinding;
