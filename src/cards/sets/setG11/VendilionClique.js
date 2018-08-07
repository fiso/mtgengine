"use strict";
const Constants = require ("../../../Constants");
const VendilionCliqueBase = require("../setA25/VendilionClique");

class VendilionClique extends VendilionCliqueBase {
  constructor (game) {
    super(game, "Vendilion Clique", "Judge Gift Cards 2011", "G11");
  }
}

module.exports = VendilionClique;
