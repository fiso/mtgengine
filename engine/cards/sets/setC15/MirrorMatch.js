"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorMatch extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirror Match", "Commander 2015", "C15");
  }
}

module.exports = MirrorMatch;
