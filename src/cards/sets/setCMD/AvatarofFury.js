"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvatarofFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Avatar of Fury", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AvatarofFury;
