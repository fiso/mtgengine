"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownoftheAges extends UnimplementedCard {
  constructor (game) {
    super(game, "Crown of the Ages", "Fifth Edition", "5ED");
  }
}

module.exports = CrownoftheAges;
