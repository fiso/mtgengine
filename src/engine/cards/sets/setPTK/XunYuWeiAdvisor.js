"use strict";
const Constants = require ("../../../Constants");
const XunYuWeiAdvisorBase = require("../setPZ2/XunYuWeiAdvisor");

class XunYuWeiAdvisor extends XunYuWeiAdvisorBase {
  constructor (game) {
    super(game, "Xun Yu, Wei Advisor", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = XunYuWeiAdvisor;
