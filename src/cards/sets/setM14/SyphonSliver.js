"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyphonSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Syphon Sliver", "Magic 2014", "M14");
  }
}

module.exports = SyphonSliver;
