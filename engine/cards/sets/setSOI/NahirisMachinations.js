"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NahirisMachinations extends UnimplementedCard {
  constructor(game) {
    super(game, "Nahiri's Machinations", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NahirisMachinations;
