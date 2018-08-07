"use strict";
const Constants = require ("../../../Constants");
const PhyrexianIngesterBase = require("../setEMA/PhyrexianIngester");

class PhyrexianIngester extends PhyrexianIngesterBase {
  constructor (game) {
    super(game, "Phyrexian Ingester", "Commander 2014", "C14");
  }
}

module.exports = PhyrexianIngester;
