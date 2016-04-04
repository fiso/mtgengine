"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MurkDwellersBase = require("../set5ED/MurkDwellers.js");

class MurkDwellers extends MurkDwellersBase {
  constructor(game) {
    super(game, "Murk Dwellers", "Fourth Edition", "4ED");
  }
}

module.exports = MurkDwellers;
