"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XunYuWeiAdvisor extends UnimplementedCard {
  constructor (game) {
    super(game, "Xun Yu, Wei Advisor", "You Make the Cube", "PZ2");
  }
}

module.exports = XunYuWeiAdvisor;
