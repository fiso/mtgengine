"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PartyCrasher extends UnimplementedCard {
  constructor (game) {
    super(game, "Party Crasher", "Unstable", "UST");
  }
}

module.exports = PartyCrasher;
