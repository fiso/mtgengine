"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkofSakiko extends UnimplementedCard {
  constructor(game) {
    super(game, "Mark of Sakiko", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MarkofSakiko;
