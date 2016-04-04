"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeshracsRiteBase = require("../set6ED/LeshracsRite.js");

class LeshracsRite extends LeshracsRiteBase {
  constructor(game) {
    super(game, "Leshrac's Rite", "Seventh Edition", "7ED");
  }
}

module.exports = LeshracsRite;
