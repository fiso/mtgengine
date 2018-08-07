"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousAvengers extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteous Avengers", "Masters Edition", "MED");
  }
}

module.exports = RighteousAvengers;
