"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IllusionsofGrandeurBase = require("../setICE/IllusionsofGrandeur.js");

class IllusionsofGrandeur extends IllusionsofGrandeurBase {
  constructor(game) {
    super(game, "Illusions of Grandeur", "Masters Edition", "MED");
  }
}

module.exports = IllusionsofGrandeur;
