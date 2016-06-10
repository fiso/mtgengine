"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreamingFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Screaming Fury", "Fifth Dawn", "5DN");
  }
}

module.exports = ScreamingFury;
