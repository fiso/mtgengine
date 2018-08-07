"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostAuramancers extends UnimplementedCard {
  constructor (game) {
    super(game, "Lost Auramancers", "Future Sight", "FUT");
  }
}

module.exports = LostAuramancers;
