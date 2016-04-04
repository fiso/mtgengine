"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrderoftheEbonHandBase = require("../setFEM/OrderoftheEbonHand.js");

class OrderoftheEbonHand extends OrderoftheEbonHandBase {
  constructor(game) {
    super(game, "Order of the Ebon Hand", "Masters Edition", "MED");
  }
}

module.exports = OrderoftheEbonHand;
