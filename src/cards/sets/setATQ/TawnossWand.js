"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TawnossWand extends UnimplementedCard {
  constructor (game) {
    super(game, "Tawnos's Wand", "Antiquities", "ATQ");
  }
}

module.exports = TawnossWand;
