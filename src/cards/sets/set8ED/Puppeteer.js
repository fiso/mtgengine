"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Puppeteer extends UnimplementedCard {
  constructor (game) {
    super(game, "Puppeteer", "Eighth Edition", "8ED");
  }
}

module.exports = Puppeteer;
