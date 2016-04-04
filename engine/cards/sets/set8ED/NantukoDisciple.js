"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NantukoDisciple extends Card {
  constructor(game) {
    super(game, "Nantuko Disciple", "Eighth Edition", "8ED");
  }
}

module.exports = NantukoDisciple;
