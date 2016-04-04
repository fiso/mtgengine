"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurkDwellers extends Card {
  constructor(game) {
    super(game, "Murk Dwellers", "Fifth Edition", "5ED");
  }
}

module.exports = MurkDwellers;
