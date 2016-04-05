"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrderofSuccession extends UnimplementedCard {
  constructor(game) {
    super(game, "Order of Succession", "Commander 2013 Edition", "C13");
  }
}

module.exports = OrderofSuccession;
