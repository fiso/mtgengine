"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrderofLeitburBase = require("../setFEM/OrderofLeitbur.js");

class OrderofLeitbur extends OrderofLeitburBase {
  constructor(game) {
    super(game, "Order of Leitbur", "Masters Edition", "MED");
  }
}

module.exports = OrderofLeitbur;
