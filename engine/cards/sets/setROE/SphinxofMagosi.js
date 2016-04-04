"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SphinxofMagosiBase = require("../setC14/SphinxofMagosi.js");

class SphinxofMagosi extends SphinxofMagosiBase {
  constructor(game) {
    super(game, "Sphinx of Magosi", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SphinxofMagosi;
