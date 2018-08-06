"use strict";
const Constants = require ("../../../Constants");
const PhyrexianIngesterBase = require("../setC14/PhyrexianIngester");

class PhyrexianIngester extends PhyrexianIngesterBase {
  constructor (game) {
    super(game, "Phyrexian Ingester", "Eternal Masters", "EMA");
  }
}

module.exports = PhyrexianIngester;
