"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class XunYuWeiAdvisor extends Card {
  constructor(game) {
    super(game, "Xun Yu, Wei Advisor", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = XunYuWeiAdvisor;
