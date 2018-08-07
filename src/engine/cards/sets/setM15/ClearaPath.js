"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClearaPath extends UnimplementedCard {
  constructor (game) {
    super(game, "Clear a Path", "Magic 2015", "M15");
  }
}

module.exports = ClearaPath;
