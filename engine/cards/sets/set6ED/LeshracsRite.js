"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeshracsRite extends Card {
  constructor(game) {
    super(game, "Leshrac's Rite", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LeshracsRite;
