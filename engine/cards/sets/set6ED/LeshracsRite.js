"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeshracsRite extends UnimplementedCard {
  constructor(game) {
    super(game, "Leshrac's Rite", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LeshracsRite;
