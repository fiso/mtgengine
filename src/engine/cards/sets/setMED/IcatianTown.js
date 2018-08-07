"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianTown extends UnimplementedCard {
  constructor (game) {
    super(game, "Icatian Town", "Masters Edition", "MED");
  }
}

module.exports = IcatianTown;
