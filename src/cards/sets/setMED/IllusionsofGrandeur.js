"use strict";
const Constants = require ("../../../Constants");
const IllusionsofGrandeurBase = require("../setICE/IllusionsofGrandeur");

class IllusionsofGrandeur extends IllusionsofGrandeurBase {
  constructor (game) {
    super(game, "Illusions of Grandeur", "Masters Edition", "MED");
  }
}

module.exports = IllusionsofGrandeur;
