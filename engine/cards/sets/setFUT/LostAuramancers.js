"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LostAuramancers extends Card {
  constructor(game) {
    super(game, "Lost Auramancers", "Future Sight", "FUT");
  }
}

module.exports = LostAuramancers;
