"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dispatch extends UnimplementedCard {
  constructor(game) {
    super(game, "Dispatch", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Dispatch;
