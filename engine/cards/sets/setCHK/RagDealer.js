"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagDealer extends Card {
  constructor(game) {
    super(game, "Rag Dealer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RagDealer;
