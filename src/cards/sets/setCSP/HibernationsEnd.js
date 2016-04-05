"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HibernationsEnd extends UnimplementedCard {
  constructor(game) {
    super(game, "Hibernation's End", "Coldsnap", "CSP");
  }
}

module.exports = HibernationsEnd;
