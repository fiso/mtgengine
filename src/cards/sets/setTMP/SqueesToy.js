"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SqueesToy extends UnimplementedCard {
  constructor (game) {
    super(game, "Squee's Toy", "Tempest", "TMP");
  }
}

module.exports = SqueesToy;
