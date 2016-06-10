"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MatsuTribeBirdstalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Matsu-Tribe Birdstalker", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MatsuTribeBirdstalker;
