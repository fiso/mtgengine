"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagDealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Rag Dealer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RagDealer;
