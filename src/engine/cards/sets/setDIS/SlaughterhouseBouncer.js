"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaughterhouseBouncer extends UnimplementedCard {
  constructor (game) {
    super(game, "Slaughterhouse Bouncer", "Dissension", "DIS");
  }
}

module.exports = SlaughterhouseBouncer;
