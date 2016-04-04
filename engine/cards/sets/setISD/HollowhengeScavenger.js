"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HollowhengeScavenger extends Card {
  constructor(game) {
    super(game, "Hollowhenge Scavenger", "Innistrad", "ISD");
  }
}

module.exports = HollowhengeScavenger;
