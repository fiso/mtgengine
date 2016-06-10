"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuppeteerClique extends UnimplementedCard {
  constructor (game) {
    super(game, "Puppeteer Clique", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PuppeteerClique;
