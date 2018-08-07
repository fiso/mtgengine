"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamPillager extends UnimplementedCard {
  constructor (game) {
    super(game, "Dream Pillager", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DreamPillager;
