"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TawnossWeaponry extends UnimplementedCard {
  constructor (game) {
    super(game, "Tawnos's Weaponry", "Masters Edition IV", "ME4");
  }
}

module.exports = TawnossWeaponry;
