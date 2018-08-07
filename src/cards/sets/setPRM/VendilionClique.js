"use strict";
const Constants = require ("../../../Constants");
const VendilionCliqueBase = require("../setA25/VendilionClique");

class VendilionClique extends VendilionCliqueBase {
  constructor (game) {
    super(game, "Vendilion Clique", "Magic Online Promos", "PRM");
  }
}

module.exports = VendilionClique;
