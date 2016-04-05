"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RibbonsoftheReikai extends UnimplementedCard {
  constructor(game) {
    super(game, "Ribbons of the Reikai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = RibbonsoftheReikai;
