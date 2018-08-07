"use strict";
const Constants = require ("../../../Constants");
const IllusionsofGrandeurBase = require("../setMED/IllusionsofGrandeur");

class IllusionsofGrandeur extends IllusionsofGrandeurBase {
  constructor (game) {
    super(game, "Illusions of Grandeur", "Ice Age", "ICE");
  }
}

module.exports = IllusionsofGrandeur;
