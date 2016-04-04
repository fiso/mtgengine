"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeshracsRiteBase = require("../set6ED/LeshracsRite.js");

class LeshracsRite extends LeshracsRiteBase {
  constructor(game) {
    super(game, "Leshrac's Rite", "Fifth Edition", "5ED");
  }
}

module.exports = LeshracsRite;
