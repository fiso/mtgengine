"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuppeteerClique extends UnimplementedCard {
  constructor (game) {
    super(game, "Puppeteer Clique", "Commander 2017", "C17");
  }
}

module.exports = PuppeteerClique;
