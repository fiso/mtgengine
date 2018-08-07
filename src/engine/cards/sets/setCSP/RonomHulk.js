"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RonomHulk extends UnimplementedCard {
  constructor (game) {
    super(game, "Ronom Hulk", "Coldsnap", "CSP");
  }
}

module.exports = RonomHulk;
