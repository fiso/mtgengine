"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianIngester extends Card {
  constructor(game) {
    super(game, "Phyrexian Ingester", "Commander 2014", "C14");
  }
}

module.exports = PhyrexianIngester;
