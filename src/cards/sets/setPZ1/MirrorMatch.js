"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorMatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirror Match", "Legendary Cube", "PZ1");
  }
}

module.exports = MirrorMatch;
