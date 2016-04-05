"use strict";
const Constants = require ("../../../Constants");
const OrderofYawgmothBase = require("../setDDE/OrderofYawgmoth");

class OrderofYawgmoth extends OrderofYawgmothBase {
  constructor(game) {
    super(game, "Order of Yawgmoth", "Urza's Saga", "USG");
  }
}

module.exports = OrderofYawgmoth;
