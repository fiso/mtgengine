"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuryCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Fury Charm", "Iconic Masters", "IMA");
  }
}

module.exports = FuryCharm;
