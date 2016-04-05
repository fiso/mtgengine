"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalkingYeti extends UnimplementedCard {
  constructor(game) {
    super(game, "Stalking Yeti", "Coldsnap", "CSP");
  }
}

module.exports = StalkingYeti;
