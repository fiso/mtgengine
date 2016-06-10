"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MountainYeti extends UnimplementedCard {
  constructor (game) {
    super(game, "Mountain Yeti", "Chronicles", "CHR");
  }
}

module.exports = MountainYeti;
