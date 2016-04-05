"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootKinAlly extends UnimplementedCard {
  constructor(game) {
    super(game, "Root-Kin Ally", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = RootKinAlly;
