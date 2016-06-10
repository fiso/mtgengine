"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TawnossWeaponry extends UnimplementedCard {
  constructor (game) {
    super(game, "Tawnos's Weaponry", "Antiquities", "ATQ");
  }
}

module.exports = TawnossWeaponry;
