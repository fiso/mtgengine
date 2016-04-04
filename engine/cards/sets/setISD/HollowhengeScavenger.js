"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowhengeScavenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Hollowhenge Scavenger", "Innistrad", "ISD");
  }
}

module.exports = HollowhengeScavenger;
