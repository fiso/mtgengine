"use strict";
const Constants = require ("../../../Constants");
const PhyrexianIngesterBase = require("../setEMA/PhyrexianIngester");

class PhyrexianIngester extends PhyrexianIngesterBase {
  constructor (game) {
    super(game, "Phyrexian Ingester", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexianIngester;
