"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LilianasSpecterBase = require("../setM11/LilianasSpecter.js");

class LilianasSpecter extends LilianasSpecterBase {
  constructor(game) {
    super(game, "Liliana's Specter", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = LilianasSpecter;
