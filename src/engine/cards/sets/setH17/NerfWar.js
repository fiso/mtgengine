"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NerfWar extends UnimplementedCard {
  constructor (game) {
    super(game, "Nerf War", "HasCon 2017", "H17");
  }
}

module.exports = NerfWar;
