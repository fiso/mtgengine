"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhitewaterNaiads extends UnimplementedCard {
  constructor(game) {
    super(game, "Whitewater Naiads", "Journey into Nyx", "JOU");
  }
}

module.exports = WhitewaterNaiads;
