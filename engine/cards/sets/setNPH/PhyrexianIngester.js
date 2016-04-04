"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianIngesterBase = require("../setC14/PhyrexianIngester.js");

class PhyrexianIngester extends PhyrexianIngesterBase {
  constructor(game) {
    super(game, "Phyrexian Ingester", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexianIngester;
