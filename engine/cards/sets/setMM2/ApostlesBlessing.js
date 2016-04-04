"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApostlesBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Apostle's Blessing", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ApostlesBlessing;
