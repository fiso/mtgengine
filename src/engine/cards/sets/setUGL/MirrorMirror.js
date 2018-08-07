"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorMirror extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirror Mirror", "Unglued", "UGL");
  }
}

module.exports = MirrorMirror;
