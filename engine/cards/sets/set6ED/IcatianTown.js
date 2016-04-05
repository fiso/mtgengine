"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianTown extends UnimplementedCard {
  constructor(game) {
    super(game, "Icatian Town", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IcatianTown;
