"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Puppeteer extends UnimplementedCard {
  constructor (game) {
    super(game, "Puppeteer", "Tenth Edition", "10E");
  }
}

module.exports = Puppeteer;
