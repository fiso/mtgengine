"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RonomUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Ronom Unicorn", "Coldsnap", "CSP");
  }
}

module.exports = RonomUnicorn;
