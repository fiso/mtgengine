"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherealChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Ethereal Champion", "Classic Sixth Edition", "6ED");
  }
}

module.exports = EtherealChampion;
