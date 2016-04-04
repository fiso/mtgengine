"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VendilionCliqueBase = require("../setpJGP/VendilionClique.js");

class VendilionClique extends VendilionCliqueBase {
  constructor(game) {
    super(game, "Vendilion Clique", "Modern Masters", "MMA");
  }
}

module.exports = VendilionClique;
