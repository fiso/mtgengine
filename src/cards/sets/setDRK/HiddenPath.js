"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenPath extends UnimplementedCard {
  constructor(game) {
    super(game, "Hidden Path", "The Dark", "DRK");
  }
}

module.exports = HiddenPath;
