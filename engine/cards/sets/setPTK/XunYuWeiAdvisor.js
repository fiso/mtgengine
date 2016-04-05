"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XunYuWeiAdvisor extends UnimplementedCard {
  constructor(game) {
    super(game, "Xun Yu, Wei Advisor", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = XunYuWeiAdvisor;
