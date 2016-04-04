"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcatianTown extends Card {
  constructor(game) {
    super(game, "Icatian Town", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IcatianTown;
